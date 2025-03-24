import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Island from './Components/Island';
import data from '../../data/data';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [currentLang, setCurrentLang] = useState('en');
  const [currentFootnoteId, setCurrentFootnoteId] = useState(null);
  const navigate = useNavigate();

  // Refs for paragraphs and footnotes
  const paragraphRefs = useRef([]);
  const footnoteRefs = useRef({});

  useEffect(() => {
    // Find the profile by ID
    const foundProfile = data.find(item => item.id === id);
    if (foundProfile) {
      setProfile(foundProfile);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  // Intersection Observer for footnotes
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
    paragraphRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [profile, currentLang]);

  // Scroll RightPanel to the matching footnote
  useEffect(() => {
    if (currentFootnoteId && footnoteRefs.current[currentFootnoteId]) {
      footnoteRefs.current[currentFootnoteId].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentFootnoteId]);

  if (!profile) return null;

  // Separate English vs. Chinese paragraphs
  const englishParagraphs = profile.description.filter(item => item.type === 'en');
  const chineseParagraphs = profile.description.filter(item => item.type === 'ch');

  // Footnote link component
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

  // Recursively extract a plain string
  const extractText = (val) => {
    if (typeof val === 'string') return val;
    if (val && typeof val === 'object') {
      if (typeof val.default === 'string') return val.default;
      if (val.default !== undefined) return extractText(val.default);
      return JSON.stringify(val);
    }
    return String(val);
  };

  // Render paragraphs with footnotes
  const renderTextWithFootnotes = (text) => {
    const textString = extractText(text);
    const parts = textString.split(/(\[\d+\])/g).filter(part => part !== '');
    return parts.map((part, index) => {
      if (/^\[\d+\]$/.test(part)) {
        const match = part.match(/^\[(\d+)\]$/);
        const footId = match[1];
        return <FootnoteLink key={index} footnoteId={footId} />;
      }
      return part;
    });
  };

  return (
    <Wrapper>
      {/* TOP BAR: left = name/address, right = tags */}
      <ProfileTopBar>
        <LeftSection>
          {currentLang === 'en' ? (
            <>
              {profile.name && <Title>{profile.name}</Title>}
              {profile.hint && <SubTitle>“{profile.hint}”</SubTitle>}
              {profile.address && <Address>{profile.address}</Address>}
            </>
          ) : (
            <>
              {profile.chName && <Title>{profile.chName}</Title>}
              {profile.chHint && <SubTitle>“{profile.chHint}”</SubTitle>}
              {profile.chineseAddress && <Address>{profile.chineseAddress}</Address>}
            </>
          )}
        </LeftSection>

        {/* If the profile has tags, display them on the right. */}
        {profile.tags && (
          <RightSection>
            <TagsContainer>
              {profile.tags.map((tag, index) => (
                <Tag key={index}>
                  {/* Toggle between en and ch */}
                  {currentLang === 'en' ? tag.en : tag.ch}
                </Tag>
              ))}
            </TagsContainer>
          </RightSection>
        )}
      </ProfileTopBar>

      <ContentWrapper>
        <LeftPanel>
          <Island data={profile} currentLang={currentLang} />
        </LeftPanel>

        <RightWrapper>
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

          <RightPanel>
            {/* Footnotes go here */}
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
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Profile;

/*────────────────────────────────────────────
   STYLED COMPONENTS
────────────────────────────────────────────*/

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ProfileTopBar = styled.div`
  display: flex;
  justify-content: space-between; /* ensures left side + right side are separated */
  align-items: flex-start;        /* or center if you prefer */
  background: #ffffff;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(66, 63, 103, 0.25);
`;

/* LEFT side container */
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

/* RIGHT side container: margin-left is not needed if we use justify-content: space-between */
const RightSection = styled.div`
  display: flex;
  align-items: flex-start; /* or center */
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 4px 8px;
  border-radius: 0px;
  font-size: 14px;
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

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  min-height: 0;
`;

const LeftPanel = styled.div`
  flex: 1.25;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid rgba(66, 63, 103, 0.25);
`;

const RightWrapper = styled.div`
  flex: 2.75;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  min-height: 0;
`;

const MiddlePanel = styled.div`
  flex: 2;
  overflow-y: auto;
  padding: 32px 48px;
  box-sizing: border-box;
  border-right: 1px solid rgba(66, 63, 103, 0.25);
  border-left: 0px solid rgba(66, 63, 103, 0.25);
  min-height: 0;
`;

const RightPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  min-height: 0;
`;

const Body = styled.div`
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
  padding: 10px;
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
