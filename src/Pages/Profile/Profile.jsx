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

  // Refs for paragraphs and footnotes
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

  // Set up IntersectionObserver for paragraphs with footnotes in MiddlePanel
  useEffect(() => {
    if (!paragraphRefs.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const footId = entry.target.getAttribute('data-footnote-id');
            if (footId) {
              setCurrentFootnoteId(footId);
            }
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

  // When currentFootnoteId changes, scroll the matching footnote in RightPanel into view
  useEffect(() => {
    if (currentFootnoteId && footnoteRefs.current[currentFootnoteId]) {
      footnoteRefs.current[currentFootnoteId].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentFootnoteId]);

  const handleNegativeClick = () => {
    if (imageId - 1 < 0) return;
    setImageId(imageId - 1);
  };

  const handlePositiveClick = () => {
    const limit = profile.images.length;
    if (imageId + 1 === limit) return;
    setImageId(imageId + 1);
  };

  // When clicking a footnote in RightPanel, scroll the corresponding paragraph in MiddlePanel into view
  const scrollToParagraph = (footId) => {
    const target = paragraphRefs.current.find(
      el => el && el.getAttribute('data-footnote-id') === footId
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!profile) return null;

  // Filter paragraphs based on language
  const englishParagraphs = profile.description.filter(item => item.type === 'en');
  const chineseParagraphs = profile.description.filter(item => item.type === 'ch');

  // Component for clickable footnote link in main text
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

  // Function to replace footnote markers in text with clickable links
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
      <BodyWrapper>
        {/* Panel 1: Left Panel */}
        <LeftPanel>
          <Island data={profile} currentLang={currentLang} />
          {/* Optional: Additional content (e.g., carousel) */}
        </LeftPanel>

        {/* Panel 2: Middle Panel */}
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

            {/* Render paragraphs with processed footnote markers */}
            {currentLang === 'en'
              ? englishParagraphs.map((item, index) => (
                  <Paragraph
                    key={index}
                    ref={el => paragraphRefs.current[index] = el}
                    data-footnote-id={item.footnoteId ? item.footnoteId : null}
                  >
                    <EnglishText>{renderTextWithFootnotes(item.default)}</EnglishText>
                  </Paragraph>
                ))
              : chineseParagraphs.map((item, index) => (
                  <Paragraph
                    key={index}
                    ref={el => paragraphRefs.current[index] = el}
                    data-footnote-id={item.footnoteId ? item.footnoteId : null}
                  >
                    <ChineseText>{renderTextWithFootnotes(item.default)}</ChineseText>
                  </Paragraph>
                ))
            }

            {profile?.resources && (
              <div>
                <LearnMoreTitle>Materials 材料</LearnMoreTitle>
                {profile.resources.map((resource, index) => (
                  <LearnMore key={index} resource={resource} />
                ))}
              </div>
            )}
          </Body>
        </MiddlePanel>

        {/* Panel 3: Right Panel for Footnotes */}
        <RightPanel>
          <FootnotesContainer>
            {profile.footnotes &&
              profile.footnotes.map(footnote => (
                <Footnote
                  key={footnote.id}
                  ref={el => (footnoteRefs.current[footnote.id] = el)}
                  onClick={() => scrollToParagraph(footnote.id)}
                >
                  <Superscript>[{footnote.id}]</Superscript> {currentLang === 'en' ? footnote.en : footnote.ch}
                </Footnote>
              ))}
          </FootnotesContainer>
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
const LearnMoreTitle = styled.div`
  margin-bottom: 8px;
  font-family: "Rowdies", cursive;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #423f67;
  text-transform: uppercase;
`;

/* Footnotes in Right Panel */
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

/* Superscript for footnote links */
const Superscript = styled.span`
  vertical-align: super;
  font-size: 0.75em;
  color: #0000FF; 
  cursor: pointer;
`;
