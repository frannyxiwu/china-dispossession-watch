import React, { useState } from 'react';
import styled from 'styled-components';

const ThematicGuide = () => {
  const [currentLang, setCurrentLang] = useState('en');

  // Content for both languages
  const englishContent = [
    {
      title: "Historical Context",
      text: "Content about the historical development of land rights and dispossession in China."
    },
    {
      title: "Legal Frameworks",
      text: "Content about the legal structures that govern dispossession."
    },
    {
      title: "Social Impact",
      text: "Content about how dispossession affects communities and social structures."
    }
  ];

  const chineseContent = [
    {
      title: "历史背景",
      text: "关于中国土地权利和征地拆迁的历史发展内容。"
    },
    {
      title: "法律框架",
      text: "关于管理征地拆迁的法律结构内容。"
    },
    {
      title: "社会影响",
      text: "关于征地拆迁如何影响社区和社会结构的内容。"
    }
  ];

  return (
    <Wrapper>
      <ProfileTopBar>
        <LeftSection>
          {currentLang === 'en' ? (
            <Title>Thematic Guide</Title>
          ) : (
            <Title>主题指南</Title>
          )}
        </LeftSection>
      </ProfileTopBar>

      <ContentWrapper>
        <LeftPanel>
          {/* Left panel is empty as requested */}
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

              {currentLang === 'en' ? (
                <>
                  <Description>
                    This thematic guide explores the key conceptual and theoretical frameworks
                    for understanding dispossession in China. It provides context and analysis
                    of the social, political, and economic factors at play.
                  </Description>
                  {englishContent.map((section, index) => (
                    <ContentSection key={index}>
                      <SectionTitle>{section.title}</SectionTitle>
                      <Paragraph>
                        <EnglishText>{section.text}</EnglishText>
                      </Paragraph>
                    </ContentSection>
                  ))}
                </>
              ) : (
                <>
                  <Description>
                    本主题指南探讨了理解中国征地拆迁的关键概念和理论框架。
                    它提供了对相关社会、政治和经济因素的背景和分析。
                  </Description>
                  {chineseContent.map((section, index) => (
                    <ContentSection key={index}>
                      <SectionTitle>{section.title}</SectionTitle>
                      <Paragraph>
                        <ChineseText>{section.text}</ChineseText>
                      </Paragraph>
                    </ContentSection>
                  ))}
                </>
              )}
            </Body>
          </MiddlePanel>

          <RightPanel>
            {/* Right panel is empty as requested */}
          </RightPanel>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ThematicGuide;

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
  justify-content: space-between;
  align-items: flex-start;
  background: #ffffff;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(66, 63, 103, 0.25);
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #423f67;
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

const Description = styled.p`
  font-family: 'Lora', serif;
  font-size: 16px;
  color: #404040;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const ContentSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-family: 'Lora', serif;
  font-size: 20px;
  color: #423F67;
  margin-bottom: 15px;
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