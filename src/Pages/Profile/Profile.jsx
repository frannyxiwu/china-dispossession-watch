import { ArrowForward, ArrowBack } from '@mui/icons-material';
import styled from 'styled-components';
import Island from './Components/Island';
import data from '../../mapData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LearnMore from './Components/LearnMore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState('');
  const [imageId, setImageId] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let foundProfile = data.find(item => item.id === id);
    if (foundProfile) {
      setProfile(foundProfile);
    } else {
      navigate(`/404`);
    }
  }, [id, navigate]);

  const quoteParser = (quote) => {
    if (!quote || quote.length === 0) return null;
    const englishQuotes = quote.filter(
      (q) => q.type === 'en' && q.type !== 'attribution'
    );
    const chineseQuotes = quote.filter(
      (q) => q.type === 'ch' && q.type !== 'attribution'
    );

    // Check the first quote's type to decide which one appears first
    if (quote[0].type === 'en') {
      return (
        <QuoteContainer>
          <EnglishQuote>
            <QuoteMarks>“</QuoteMarks>
            {englishQuotes.map((item, index) => (
              <div key={index}>
                {item.default}
                <br />
                <br />
              </div>
            ))}
            <QuoteMarks>”</QuoteMarks>
          </EnglishQuote>
          <ChineseQuote>
            <QuoteMarks>“</QuoteMarks>
            {chineseQuotes.map((item, index) => (
              <div key={index}>
                {item.default}
                <br />
                <br />
              </div>
            ))}
            <QuoteMarks>”</QuoteMarks>
            <Attributions>
              <b>Source: </b>
              {quote.find(item => item.type === 'attribution')?.default || 'Unknown'}
            </Attributions>
          </ChineseQuote>
        </QuoteContainer>
      );
    } else {
      return (
        <QuoteContainer>
          <ChineseQuote>
            <QuoteMarks>“</QuoteMarks>
            {chineseQuotes.map((item, index) => (
              <div key={index}>
                {item.default}
                <br />
                <br />
              </div>
            ))}
            <QuoteMarks>”</QuoteMarks>
          </ChineseQuote>
          <EnglishQuote>
            <QuoteMarks>“</QuoteMarks>
            {englishQuotes.map((item, index) => (
              <div key={index}>
                {item.default}
                <br />
                <br />
              </div>
            ))}
            <QuoteMarks>”</QuoteMarks>
            <Attributions>
              <b>Source: </b>
              {quote.find(item => item.type === 'attribution')?.default || 'Unknown'}
            </Attributions>
          </EnglishQuote>
        </QuoteContainer>
      );
    }
  };

  const handleNegativeClick = () => {
    if (imageId - 1 < 0) return;
    setImageId(imageId - 1);
  };

  const handlePositiveClick = () => {
    const limit = profile.images.length;
    if (imageId + 1 === limit) return;
    setImageId(imageId + 1);
  };

  if (!profile) return null;

  // Separate English and Chinese paragraphs
  const englishParagraphs = profile.description.filter(item => item.type === 'en');
  const chineseParagraphs = profile.description.filter(item => item.type === 'ch');

  // We'll pair them up by index in the render
  const maxLength = Math.max(englishParagraphs.length, chineseParagraphs.length);

  return (
    <Wrapper>
      <BodyWrapper>
        <Island data={profile} />
        <Body>
          {Array.from({ length: maxLength }).map((_, index) => (
            <ParagraphRow key={index}>
              <ParagraphColumn>
                <EnglishText>
                  {englishParagraphs[index]?.default || ''}
                </EnglishText>
              </ParagraphColumn>
              <ParagraphColumn>
                <ChineseText>
                  {chineseParagraphs[index]?.default || ''}
                </ChineseText>
              </ParagraphColumn>
            </ParagraphRow>
          ))}

          {profile.quote && quoteParser(profile.quote)}

          <Carousel
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
          >
            <CarouselButton
              limit={profile.images.length - 1 === imageId}
              pos={'right'}
              onClick={handlePositiveClick}
            >
              <ArrowForward />
            </CarouselButton>
            <CarouselButton
              limit={imageId === 0}
              pos={'left'}
              onClick={handleNegativeClick}
            >
              <ArrowBack />
            </CarouselButton>
            {profile.images && (
              <a href={profile.images[imageId].link}>
                <img
                  src={profile.images[imageId].link}
                  style={{ height: '500px', margin: 'auto' }}
                  alt=""
                />
              </a>
            )}
          </Carousel>
          <ImageCaption>{profile.images[imageId].caption}</ImageCaption>
          <ImageCaptionChinese>{profile.images[imageId].chCaption}</ImageCaptionChinese>
          <Counter>
            {imageId + 1}/{profile.images.length}
          </Counter>

          {profile?.secondaryQuote && quoteParser(profile.secondaryQuote)}

          <Border />

          {profile?.resources && (
            <div>
              <LearnMoreTitle>Learn More</LearnMoreTitle>
              <LearnMoreSubtitle>
                Check out more resources submitted by our community.
              </LearnMoreSubtitle>
              {profile.resources.map((resource, index) => (
                <LearnMore key={index} resource={resource} />
              ))}
            </div>
          )}
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Profile;

/* ------------------ Styled Components ------------------ */

// Container for each row of paragraphs
const ParagraphRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* top-aligned */
  margin-bottom: 32px;
  gap: 24px; /* space between the two columns */
`;

// Each column is 50% width; tweak as needed
const ParagraphColumn = styled.div`
  width: 50%;
`;

const EnglishText = styled.div`
  font-family: 'Quattrocento';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1e1e1e;
`;

const ChineseText = styled.div`
  font-family: 'Noto Serif TC';
  font-size: 16px;
  line-height: 26px;
  color: #1e1e1e;
`;

const LearnMoreSubtitle = styled.div`
  font-family: 'Quattrocento';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 16px;
`;

const LearnMoreTitle = styled.div`
  margin-bottom: 16px;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #423f67;
  text-transform: uppercase;
`;

const Border = styled.div`
  border-top: 1px solid rgba(66, 63, 103, 0.25);
  margin: 32px 0px;
  width: 100%;
`;

const ImageCaption = styled.div`
  font-family: 'Quattrocento';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #1e1e1e;
`;

const ImageCaptionChinese = styled(ImageCaption)`
  font-family: 'Noto Serif TC';
`;

const Counter = styled.div`
  font-family: 'Quattrocento';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  color: #1e1e1e;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: calc(50% - 8px);
  left: ${props => props.pos === 'left' && '8px'};
  right: ${props => props.pos === 'right' && '8px'};
  opacity: ${props => (props.limit ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #423f67;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: ${props => (!props.limit ? 'pointer' : 'default')};
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const Attributions = styled.div`
  font-family: 'Quattrocento';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1e1e1e;
`;

const QuoteMarks = styled.div`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  color: #423f67;
`;

const ChineseQuote = styled.div`
  padding: 16px 32px;
  color: #423f67;
  font-weight: 500;
  font-family: 'Noto Serif TC';
`;

const EnglishQuote = styled.div`
  padding: 16px 32px;
  color: #423f67;
  font-weight: 300;
  font-family: 'Rowdies';
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 32px;
`;

const Body = styled.div`
  padding: 32px 48px;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(66, 63, 103, 0.25);

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    height: 100%;
    border-left: none;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #fbf6e9;
  justify-content: center;
`;

