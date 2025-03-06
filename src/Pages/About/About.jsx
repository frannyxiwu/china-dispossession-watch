import React, { useState } from "react";
import styled from "styled-components";
import MassHumanitiesLogo from "../../images/massHumanitiesLogo.png";
import mitCRELogo from "../../images/mitCRELogo.png";
import mitSAPLogo from "../../images/mitSAPLogo.png";
import mitPKGIDEASLogo from "../../images/mitPKGIDEASLogo.png";

const About = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const englishContent = {
    aboutHeader: "ABOUT",
    //subHeader: "What is the China Dispossession Watch?",
    description:
      "China Dispossession Watch is a digital platform connecting ethnographic documentation of grassroots anti-displacement activism with empirical analysis of development and land finance. We work to circumvent information barriers to create China's first atlas of forced expropriation and demolition. Our goal is to build an ecosystem where affected communities, researchers, and allies can collaboratively document displacement patterns, challenge misinformation and propagandist narratives, and build evidence-based pathways toward both economic and procedural justice in China's urbanization process.",
    partnersHeader: "SUPPORTED BY",
    teamHeader: "TEAM",
    teamMembers: [
      {
        name: "Franny Xi Wu",
        role: "Founder",
        chName: "Franny Xi Wu",
        chRole: "创始人",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741228757/fxw_headshot_mzqmdo.png",
      },
      {
        name: "Team Member 1",
        role: "Role 1",
        chName: "团队成员 1",
        chRole: "职位 1",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741229103/Screenshot_2025-03-05_at_9.44.37_PM_slette.png",
      },
      {
        name: "Team Member 2",
        role: "Role 2",
        chName: "团队成员 2",
        chRole: "职位 2",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741229104/Screenshot_2025-03-05_at_9.44.49_PM_yqicd6.png",
      },
      {
        name: "Team Member 3",
        role: "Role 3",
        chName: "团队成员 3",
        chRole: "职位 3",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741229103/Screenshot_2025-03-05_at_9.44.37_PM_slette.png",
      },
    ],
    faqHeader: "Frequently Asked Questions",
    faqs: [
        {
          question: "What kind of data does China Dispossession Watch collect?",
          answer: "We collect both qualitative and quantitative data:<br>"
            + "<strong>Ethnographic accounts:</strong> Stories from evicted residents, their struggles, and acts of resistance.<br>"
            + "<strong>Satellite imagery & GIS data:</strong> To track land use changes post-expropriation.<br>"
            + "<strong>Financial analysis:</strong> Following the money behind land transactions and real estate developments.<br>"
            + "<strong>Legal cases & petitions:</strong> Examining how expropriated citizens fight back within (or outside of) the legal system."
        },
      {
        question: "Who funds China Dispossession Watch?",
        answer:
          "Our funding comes from <strong> academic institutions, research grants, and social impact funds </strong>. We are currently supported by the <strong> MIT PKG IDEAS Social Innovation Challenge</strong>, which provides funding for early-stage, high-impact initiatives. <strong>We do not accept funding from governments or corporate entities</strong> that have vested interests in real estate speculation or development."
      },
      {
        question: "Question 3",
        answer:
          "Answer 3",
      },
    ],
  };

  const chineseContent = {
    aboutHeader: "关于我们",
    //subHeader: "什么是中国征地拆迁观察?",
    description:
      "中国征地拆迁观察是一个数字平台，致力于将基层反拆迁抗争的民族志记录与发展及土地金融的实证分析相结合。我们旨在打破信息壁垒，打造中国首个关于强制征地与拆迁的全景图谱。我们的目标是构建一个生态系统，使受影响的社区、研究人员和支持者能够协同记录流离失所的现象，质疑虚假信息和宣传性叙事，并探索基于证据的途径，以实现中国城市化进程中的经济正义和程序正义。",
    partnersHeader: "合作伙伴",
    teamHeader: "团队成员",
    teamMembers: [
      {
        name: "Franny Xi Wu",
        role: "Founder",
        chName: "Franny Xi Wu",
        chRole: "创始人",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741228757/fxw_headshot_mzqmdo.png",
      },
      {
        name: "Team Member 1",
        role: "Role 1",
        chName: "团队成员 1",
        chRole: "职位 1",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741229103/Screenshot_2025-03-05_at_9.44.37_PM_slette.png",
      },
      {
        name: "Team Member 2",
        role: "Role 2",
        chName: "团队成员 2",
        chRole: "职位 2",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741229104/Screenshot_2025-03-05_at_9.44.49_PM_yqicd6.png",
      },
      {
        name: "Team Member 3",
        role: "Role 3",
        chName: "团队成员 3",
        chRole: "职位 3",
        photo:
          "https://res.cloudinary.com/dsqszwws8/image/upload/v1741229103/Screenshot_2025-03-05_at_9.44.37_PM_slette.png",
      },
    ],
    faqHeader: "常见问题",
    faqs: [
      {
        question: "什么是中国征地拆迁观察？",
        answer:
          "中国征地拆迁观察是一个数字平台，将基层反拆迁抗争的民族志记录与土地金融的实证分析相结合。",
      },
      {
        question: "我如何参与该平台？",
        answer:
          "我们欢迎研究人员、活动家和社区成员的贡献。请联系我们，共同记录和分析拆迁现象。",
      },
      {
        question: "该项目由谁支持？",
        answer:
          "我们的工作得到了麻省理工学院建筑与规划学院、麻省理工学院房地产中心以及麻省理工学院 IDEAS 社会创新挑战赛的支持。",
      },
    ],
  };

  const content = currentLang === "en" ? englishContent : chineseContent;

  return (
    <Wrapper>
      <ContentWrapper>
        <ToggleContainer>
          <ToggleButton
            active={currentLang === "en"}
            onClick={() => setCurrentLang("en")}
          >
            English
          </ToggleButton>
          <ToggleButton
            active={currentLang === "ch"}
            onClick={() => setCurrentLang("ch")}
          >
            中文
          </ToggleButton>
        </ToggleContainer>

        {/* ABOUT Section */}
        <Section>
          <SectionBox>
            <Header>
              <Lora>{content.aboutHeader}</Lora>
            </Header>
            <SubHeader>{content.subHeader}</SubHeader>
            {currentLang === "en" ? (
              <EnglishText>{content.description}</EnglishText>
            ) : (
              <ChineseText>{content.description}</ChineseText>
            )}
          </SectionBox>
        </Section>

        {/*} FAQ Section */}
        <Section>
          <Header>
            <Lora>{content.faqHeader}</Lora>
          </Header>
          <FAQContainer>
            {content.faqs.map((faq, index) => (
              <FAQItem key={index}>
                <Question onClick={() => toggleQuestion(index)} isOpen={openQuestion === index}>
                  {faq.question}
                  <Arrow isOpen={openQuestion === index}>▼</Arrow>
                </Question>
                <Answer isOpen={openQuestion === index} dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </FAQItem>
            ))}
          </FAQContainer>
        </Section>

        {/* SUPPORTED BY / PARTNERS Section */}
        <Section>
            <Header>
              <Lora>{content.partnersHeader}</Lora>
            </Header>
            <Partners>
              <PartnerLogo
                src={mitSAPLogo}
                alt="MIT School of Architecture and Planning"
              />
              <PartnerLogo
                src={mitCRELogo}
                alt="MIT Center for Real Estate"
              />
              <PartnerLogo
                src={mitPKGIDEASLogo}
                alt="MIT IDEAS Social Innovation Challenge"
              />
            </Partners>
        </Section>

        {/* TEAM Section */}
        <Section>
            <Header>
              <Lora>{content.teamHeader}</Lora>
            </Header>
            <TeamGrid>
              {content.teamMembers.map((member, index) => (
                <TeamMember key={index}>
                  <MemberPhoto
                    src={member.photo}
                    alt={currentLang === "en" ? member.name : member.chName}
                  />
                  {currentLang === "en" ? (
                    <>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                    </>
                  ) : (
                    <>
                      <MemberName>{member.chName}</MemberName>
                      <MemberRole>{member.chRole}</MemberRole>
                    </>
                  )}
                </TeamMember>
              ))}
            </TeamGrid>
        </Section>
      </ContentWrapper>
    </Wrapper>
  );
};

/* LANGUAGE-SPECIFIC TEXT STYLES */
const EnglishText = styled.div`
  font-family: "Lora", serif;
  font-size: 16px;
  color: #000;
  margin-top: 16px;
`;

const ChineseText = styled.div`
  font-family: "Noto Serif";
  font-size: 16px;
  color: #000;
  margin-top: 16px;
`;

/* GENERAL STYLED COMPONENTS */
const Lora = styled.div`
  font-family: "Lora", serif;
`;

const SubHeader = styled.div`
  margin-top: 8px;
  font-family: "Lora", serif;
  font-style: normal;
  font-size: 16px;
  //line-height: 26px;
  font-weight: 500;
  color: #423f67;
  margin: 24px 0;
`;

const Header = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  //line-height: 26px;
  margin-bottom: 16px;
  gap: 6px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: #423f67;

  div:not(:first-child) {
    font-weight: 800;
  }
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

/* The invisible box for each section.
   Adjust min-height as needed so that content doesn't shift between language toggles. */
const SectionBox = styled.div`
     min-height: 180px;
  /* Optionally add padding if needed: padding: 20px; */
     padding-bottom: 16px;
     border-bottom: 1px solid #ccc;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  margin-top: 0px;
  padding: 0px;
  width: 900px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-top: 0;
    padding: 0;
    width: 100%;
  }
`;

const Partners = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-bottom: 24px; /* Adds space above the bottom border */
  border-bottom: 1px solid #ccc;
`;

const PartnerLogo = styled.img`
  height: 45px;
  width: auto;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const TeamMember = styled.div`
  flex: 1 1 100px;
  max-width: 150px;
  text-align: center;
`;

const MemberPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const MemberName = styled.div`
  font-family: "Lora", serif;
  font-size: 16px;
  margin-top: 10px;
  color: #423f67;
`;

const MemberRole = styled.div`
  font-family: "Lora", serif;
  font-size: 14px;
  color: #423f67;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 8px;
  background-color: ${(props) => (props.active ? "#423f67" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#423f67")};
  border: 1px solid #423f67;
  font-size: 16px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 42px;
  border-bottom: 1px solid #ccc;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #ccc;
`;

const Question = styled.div`
  font-family: "Lora", serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  color: #423f67;
  color: ${(props) => (props.isOpen ? "#423f67" : "#1e1e1e")};
  transition: color 0.2s ease;
`;

const Answer = styled.div`
  //font-family: "Lora", serif;
  font-size: 14px;
  color: #555;
  max-height: ${(props) => (props.isOpen ? "100px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: ${(props) => (props.isOpen ? "8px 0" : "0")};
`;

const Arrow = styled.span`
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export default About;
