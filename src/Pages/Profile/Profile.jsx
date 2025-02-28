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
  const [currentLang, setCurrentLang] = useState('en');
  const navigate = useNavigate();

  useEffect(() => {
    let foundProfile = data.find(item => item.id === id);
    if (foundProfile) {
      setProfile(foundProfile);
    } else {
      navigate(`/404`);
    }
  }, [id, navigate]);

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

  return (
    <Wrapper>
      <BodyWrapper>
        {/* Panel 1: Left Panel */}
        <LeftPanel>
          <Island data={profile} />
        </LeftPanel>

        {/* Panel 2: Middle Panel */}
        <MiddlePanel>
          <Body>
            <ToggleContainer>
              <ToggleButton active={currentLang === 'en'} onClick={() => setCurrentLang('en')}>
                English
              </ToggleButton>
              <ToggleButton active={currentLang === 'ch'} onClick={() => setCurrentLang('ch')}>
                中文
              </ToggleButton>
            </ToggleContainer>

            {currentLang === 'en'
              ? englishParagraphs.map((item, index) => (
                  <Paragraph key={index}>
                    <EnglishText>{item.default}</EnglishText>
                  </Paragraph>
                ))
              : chineseParagraphs.map((item, index) => (
                  <Paragraph key={index}>
                    <ChineseText>{item.default}</ChineseText>
                  </Paragraph>
                ))
            }

            <Carousel
              onMouseEnter={() => setShowArrow(true)}
              onMouseLeave={() => setShowArrow(false)}
            >
              <CarouselButton
                limit={profile.images.length - 1 === imageId}
                pos="right"
                onClick={handlePositiveClick}
              >
                <ArrowForward />
              </CarouselButton>
              <CarouselButton
                limit={imageId === 0}
                pos="left"
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
            <ImageCaptionChinese>
              {profile.images[imageId].chCaption}
            </ImageCaptionChinese>
            <Counter>
              {imageId + 1}/{profile.images.length}
            </Counter>

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
        </MiddlePanel>

        {/* Panel 3: New Right Panel */}
        <RightPanel>
          <Placeholder>
            {/* Replace this with your desired content */}
            Additional content goes here.
          </Placeholder>
        </RightPanel>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Profile;

/* ------------------ Styled Components ------------------ */

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

/* Panel Definitions */
const LeftPanel = styled.div`
  flex: 1;
`;

const MiddlePanel = styled.div`
  flex: 2;
`;

const RightPanel = styled.div`
  flex: 1;
`;

/* Body of Middle Panel */
const Body = styled.div`
  padding: 32px 48px;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(66, 63, 103, 0.25);
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 800px) {
    height: auto;
    border-left: none;
  }
`;

/* Toggle Buttons for Language */
const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#423f67' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#423f67')};
  border: 1px solid #423f67;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

/* Paragraphs and Text */
const Paragraph = styled.div`
  margin-bottom: 24px;
`;

const EnglishText = styled.div`
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

const ChineseText = styled.div`
  font-family: 'Noto Serif';
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #000;
`;

/* Learn More Section */
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
  margin: 32px 0;
  width: 100%;
`;

const ImageCaption = styled.div`
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #1e1e1e;
`;

const ImageCaptionChinese = styled(ImageCaption)`
  font-family: 'Noto Serif TC';
`;

const Counter = styled.div`
  font-family: 'Quattrocento';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-top: 16px;
  color: #1e1e1e;
`;

/* Carousel */
const CarouselButton = styled.button`
  position: absolute;
  top: calc(50% - 8px);
  left: ${(props) => props.pos === 'left' && '8px'};
  right: ${(props) => props.pos === 'right' && '8px'};
  opacity: ${(props) => (props.limit ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #423f67;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: ${(props) => (!props.limit ? 'pointer' : 'default')};
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

/* Placeholder for Panel 3 */
const Placeholder = styled.div`
  padding: 32px;
  text-align: center;
  font-family: 'Lora', serif;
  font-size: 18px;
  color: #423f67;
  border-left: 1px solid rgba(66, 63, 103, 0.25);
`;
