import { ArrowForward, ArrowBack } from '@mui/icons-material';
import styled from 'styled-components';
import Island from './Components/Island';
import data from '../../mapData';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import LearnMore from './Components/LearnMore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState('');
  const [imageId, setImageId] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [currentFootnoteId, setCurrentFootnoteId] = useState(null);
  const navigate = useNavigate();

  const paragraphRefs = useRef([]);
  const footnoteRefs = useRef({});

  useEffect(() => {
    const foundProfile = data.find(item => item.id === id);
    if (foundProfile) {
      setProfile(foundProfile);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  // Intersection Observer for paragraphs with footnotes
  useEffect(() => {
    if (!paragraphRefs.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const footId = entry.target.getAttribute('data-footnote-id');
            if (footId) setCurrentFootnoteId(footId);
          }
        });
      },
      { threshold: 0.5 }
    );

    paragraphRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [profile, currentLang]);

  useEffect(() => {
    if (currentFootnoteId && footnoteRefs.current[currentFootnoteId]) {
      footnoteRefs.current[currentFootnoteId].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentFootnoteId]);

  if (!profile) return null;

  // Separate out English vs Chinese paragraphs
  const englishParagraphs = profile.description.filter(item => item.type === 'en');
  const chineseParagraphs = profile.description.filter(item => item.type === 'ch');

  // Footnote link helper
  const FootnoteLink = ({ footnoteId }) => {
    const handleClick = () => {
      if (footnoteRefs.current[footnoteId]) {
        footnoteRefs.current[footnoteId].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
    return <Superscript onClick={handleClick}>[{footnoteId}]</Superscript>;
  };

  // Replace [1], [2], etc. with clickable footnote links
  const renderTextWithFootnotes = (text) => {
    const parts = text.split(/(\[\d+\])/g);
    return parts.map((part, index) => {
      const match = part.match(/^\[(\d+)\]$/);
      if (match) {
        const id = match[1];
        return <FootnoteLink key={index} footnoteId={id} />;
      }
      return part;
    });
  };

  return (
    <Wrapper>
      {/* 
         ─────────────────────────────────────────
         TOP BAR — uses separate EN vs. CH fields
         ─────────────────────────────────────────
       */}
      <ProfileTopBar>
        {currentLang === 'en' ? (
          /* EN version: .name, .hint, .address */
          <>
            {profile.name && <Title>{profile.name}</Title>}
            {profile.hint && <SubTitle>“{profile.hint}”</SubTitle>}
            {profile.address && <Address>{profile.address}</Address>}
          </>
        ) : (
          /* CH version: .chName, .chHint, .chineseAddress */
          <>
            {profile.chName && <Title>{profile.chName}</Title>}
            {profile.chHint && <SubTitle>“{profile.chHint}”</SubTitle>}
            {profile.chineseAddress && <Address>{profile.chineseAddress}</Address>}
          </>
        )}
      </ProfileTopBar>

      {/* 
         ─────────────────────────────────────────
         3-PANEL LAYOUT
         ─────────────────────────────────────────
      */}
      <BodyWrapper>
        {/* Panel 1: Left */}
        <LeftPanel>
          <Island data={profile} currentLang={currentLang} />
        </LeftPanel>

        {/* Panel 2: Middle */}
        <MiddlePanel>
          <Body>
            <ToggleContainer>
              <ToggleButton
                active={currentLang === 'en'}
                onClick={() => setCurrentLang('en')}
              >
                English
              </ToggleButton>
              <ToggleButton
                active={currentLang === 'ch'}
                onClick={() => setCurrentLang('ch')}
              >
                中文
              </ToggleButton>
            </ToggleContainer>

            {currentLang === 'en'
              ? englishParagraphs.map((item, index) => (
                  <Paragraph
                    key={index}
                    ref={el => (paragraphRefs.current[index] = el)}
                    data-footnote-id={item.footnoteId || null}
                  >
                    <EnglishText>{renderTextWithFootnotes(item.default)}</EnglishText>
                  </Paragraph>
                ))
              : chineseParagraphs.map((item, index) => (
                  <Paragraph
                    key={index}
                    ref={el => (paragraphRefs.current[index] = el)}
                    data-footnote-id={item.footnoteId || null}
                  >
                    <ChineseText>{renderTextWithFootnotes(item.default)}</ChineseText>
                  </Paragraph>
                ))}
          </Body>
        </MiddlePanel>

        {/* Panel 3: Right */}
        <RightPanel>
          <FootnotesContainer>
            {profile.footnotes &&
              profile.footnotes.map(footnote => (
                <Footnote
                  key={footnote.id}
                  ref={el => (footnoteRefs.current[footnote.id] = el)}
                  onClick={() => {
                    const target = paragraphRefs.current.find(
                      el => el && el.getAttribute('data-footnote-id') === footnote.id
                    );
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <Superscript>[{footnote.id}]</Superscript>{' '}
                  {currentLang === 'en' ? footnote.en : footnote.ch}
                </Footnote>
              ))}
          </FootnotesContainer>
        </RightPanel>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Profile;

/*────────────────────────────────────────────
   STYLED COMPONENTS
────────────────────────────────────────────*/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileTopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background: #ffffff;
  padding: 16px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(66, 63, 103, 0.25);
`;

const Title = styled.div`
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #423f67;
`;

const SubTitle = styled.div`
  font-family: 'Lora', serif;
  font-weight: 450;
  font-size: 16px;
  line-height: 26px;
  color: #423f67;
  margin-top: 4px;
`;

const Address = styled.div`
  font-family: 'Lora', serif;
  font-weight: 450;
  font-size: 14px;
  line-height: 22px;
  color: #423f67;
  margin-top: 4px;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LeftPanel = styled.div`
  flex: 1.25;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
`;

const MiddlePanel = styled.div`
  flex: 2;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid rgba(66, 63, 103, 0.25);
`;

const RightPanel = styled.div`
  flex: 0.75;
  height: 100vh;
  overflow-y: auto;
`;

const Body = styled.div`
  padding: 32px 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 8px;
  background-color: ${(props) => (props.active ? '#423f67' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#423f67')};
  border: 1px solid #423f67;
  font-size: 16px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const Paragraph = styled.div`
  margin-bottom: 24px;
`;

const EnglishText = styled.div`
  font-family: 'Lora', serif;
  font-size: 16px;
  color: #000;
`;

const ChineseText = styled.div`
  font-family: 'Noto Serif';
  font-size: 16px;
  color: #000;
`;

const FootnotesContainer = styled.div`
  padding: 16px;
  max-height: 100%;
  overflow-y: auto;
`;

const Footnote = styled.div`
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  font-family: 'Lora', serif;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const Superscript = styled.span`
  vertical-align: super;
  font-size: 0.75em;
  color: #0000ff;
  cursor: pointer;
`;
