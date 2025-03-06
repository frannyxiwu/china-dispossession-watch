import React, { useState } from "react";
import styled from "styled-components";
import MassHumanitiesLogo from "../../images/massHumanitiesLogo.png";
import mitCRELogo from "../../images/mitCRELogo.png";
import mitSAPLogo from "../../images/mitSAPLogo.png";
import mitPKGIDEASLogo from "../../images/mitPKGIDEASLogo.png";

const About = () => {
  const [currentLang, setCurrentLang] = useState("en");

  // Use an array for storing open FAQ indices
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const englishContent = {
    aboutHeader: "ABOUT",
    //subHeader: "Our Mission",
    description:
      "<strong>Our Mission</strong><br />" +
      "China Dispossession Watch stands as a critical digital witness at the intersection of grassroots resistance and empirical documentation. We expose the systemic nature of China's forced land expropriations through the first comprehensive atlas of displacement—combining activists' lived experiences with rigorous analysis of development outcomes.<br /><br />" +
      "Our platform serves as both archive and amplifier, circumventing government censorship to transform isolated struggles into collective testimony. We build secure pathways for communities to document their resistance, researchers to access ground-truth data, and allies to join in advocacy and mutual aid—creating an ecosystem where truth can catalyze justice.<br /><br />" +
      
      "<strong>The Crisis of Dispossession</strong><br />" +
      "Since the 1990s, China's urbanization has consumed over 4.2 million hectares of rural land, displacing 88 million villagers through government-mandated expropriation. By 2030, an additional 50.4 million people-or 17% of China's rural population in total—will face forced removal from their homes and land.<br /><br />" +
      "Behind these staggering numbers lie stories of profound gravity: families rendered homeless, activists illegally detained, and communities torn apart. Many face torture, imprisonment, and even death for defending basic property rights. The state simultaneously seizes their land, suppresses their resistance, and controls the narrative—depicting victims as opportunistic grifters rather than rights-holders.<br /><br />" +
      "Current documentation approaches fail to capture this reality. Academic models often reduce complex human experiences to economic calculations. Existing human rights reports are scarce and rarely connect individual cases to reveal systemic patterns. State media systematically discredits and suppresses activists. Our work addresses these limitations by integrating lived experiences with empirical evidence to expose the full scale of these injustices.<br /><br />" +
      
      "<strong>Our Approach</strong><br />" +
      "We aim to center the expertise of displaced communities, recognizing that those fighting dispossession hold the deepest understanding of oppression and resistance. Their experiences guide our analysis and priorities. By tracking what happens to expropriated land, we expose the wealth extraction that enriches local governments and developers at evictees' expense—providing empirical evidence that challenges state narratives.<br /><br />" +
      "As overseas researchers, we leverage our position to facilitate connections across power hierarchies—from grassroots activists to institutional allies—creating a model for diasporic solidarity. We connect displaced communities with researchers, rights lawyers, environmental justice groups, and international organizations—creating a robust ecosystem of solidarity and knowledge-sharing. This cross-border collaboration enables us to safely document patterns of displacement and build international awareness that would otherwise be suppressed within China.<br /><br />" +
      
      //"<strong>Our Innovation</strong><br />" +
      //"China Dispossession Watch fundamentally reimagines documentation of forced displacement. Where others have offered either isolated personal testimonies or detached statistical analysis, we integrate these approaches to reveal the structural violence at urbanization's core.<br />" +
      //"Our platform innovates through:<br />" +
      //"• <strong>Security-Conscious Design:</strong> In an environment of intensifying repression, we build pathways for knowledge-sharing that protect vulnerable community members from surveillance and retaliation.<br />" +
      //"• <strong>Cross-Border Collaboration:</strong> We leverage our position as overseas researchers to facilitate connections across power hierarchies—from grassroots activists to institutional allies—creating a model for diasporic solidarity.<br />" +
      //"• <strong>Community-Controlled Storytelling:</strong> We ensure that affected communities retain ownership of their narratives and determine how their experiences are shared and utilized.<br />" +
      //"• <strong>Empirical Ground-Truthing:</strong> We validate activists' accounts with satellite imagery, land transaction records, and development data—strengthening their testimony against state propaganda.<br /><br />" +
      //"<strong>Our Impact</strong><br />" +
      //"We measure our effectiveness through:<br />" +
      //"• Direct Community Impact<br />" +
      //"• Platform Resilience<br />" +
      //"• Movement Building<br />" +
      //"Quarterly security audits and monthly community co-design sessions ensure our platform evolves with movement needs and emerging threats.<br /><br />" +
      
      "<strong>Our Ethical Commitment</strong><br />" +
      "We recognize the profound responsibility we bear toward communities already facing severe repression. Our work is guided by principles that continuously assess risks to participants and adjust our methods accordingly, prioritizing their protection above all other objectives. Affected people control what information they share, how it's used, and when it's removed. We ensure all participants understand both the potential benefits and risks of documentation.<br /><br />" +
      "We build slowly through trusted relationships rather than rapid scaling, fostering sustainable connections between networks of resistance. Through regular community co-design sessions, we ensure our platform evolves with movement needs and emerging threats. Our success is measured by our ability to safely connect activist networks, document rights violations, and shift public discourse on displacement while maintaining the security and dignity of those we serve.<br />",
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
        answer:
          "We collect both qualitative and quantitative data:<br>" +
          "<strong>Ethnographic accounts:</strong> Stories from evicted residents, their struggles, and acts of resistance.<br />" +
          "<strong>Satellite imagery & GIS data:</strong> To track land use changes post-expropriation.<br />" +
          "<strong>Financial analysis:</strong> Following the money behind land transactions and real estate developments.<br />" +
          "<strong>Legal cases & petitions:</strong> Examining how expropriated citizens fight back within (or outside of) the legal system.",
      },
      {
        question: "Who funds China Dispossession Watch?",
        answer:
          "Our funding comes from <strong> academic institutions, research grants, and social impact funds </strong>. We are currently supported by the <strong> MIT PKG IDEAS Social Innovation Challenge</strong>, which provides funding for early-stage, high-impact initiatives. <strong>We do not accept funding from governments or corporate entities</strong> that have vested interests in real estate speculation or development.",
      },
      {
        question: "Question 3",
        answer: "Answer 3",
      },
    ],
  };

  const chineseContent = {
    aboutHeader: "关于我们",
//    subHeader: "什么是中国征地拆迁观察?",
    description:
    "<strong>我们的使命</strong><br />" +
    "中国征地拆迁观察作为基层抗争与实证记录交汇处的重要数字见证者，致力于揭露中国强制征地的系统性本质。通过构建首个全景式流离失所图谱，我们将行动者的亲身经历与对开发成果的严谨分析相结合。<br /><br />" +
    "我们的平台既是档案馆，也是扩音器，它突破政府审查，将零散的抗争转化为集体证词。我们为社区建立安全的渠道，以记录他们的抵抗；为研究人员提供获取实地数据的途径；同时也让支持者加入倡导与互助，共同构建一个以真相推动正义的生态系统。<br /><br />" +
    
    "<strong>征地危机</strong><br />" +
    "自1990年代以来，中国的城市化进程已吞噬超过420万公顷农村土地，通过政府主导的征地措施使得8,800万农民流离失所。到2030年，将有额外5040万人——占中国农村人口总数的17%——面临被迫离开家园和失去土地的命运。<br /><br />" +
    "这些惊人数字背后蕴藏着沉重的故事：家庭流离失所、活动家被非法拘禁、社区四分五裂。许多人因捍卫基本财产权而遭受酷刑、监禁，甚至不幸丧命。国家一方面没收他们的土地，一方面压制他们的抵抗，操控舆论，将受害者描绘为机会主义的骗子，而非权利拥有者。<br /><br />" +
    "现有的记录方法无法完整捕捉这一现实。学术模型往往将复杂的人类经历简化为经济计算；现有的人权报告稀缺，且很少将个案联系起来揭示系统性问题；国家媒体则系统性地抹黑并打压活动家。我们的工作通过整合亲身经历与实证证据，揭示这些不公现象的全貌，从而应对这些局限。<br /><br />" +
    
    "<strong>我们的方法</strong><br />" +
    "我们致力于以流离失所群体的专业经验为中心，因为他们最深刻地理解压迫与抵抗的本质，他们的经历指引着我们的分析和优先事项。通过追踪被征用土地的命运，我们揭示了在被征地者牺牲下地方政府和开发商所获取的财富转移——提供了挑战国家叙事的实证依据。<br /><br />" +
    "作为海外研究人员，我们利用自身优势，搭建跨越权力层级的桥梁——从基层活动家到机构支持者，共同构建海外华人团结的新模式。我们将流离失所的社区与研究者、维权律师、环境正义组织及国际机构联系在一起，打造一个坚实的团结与知识共享生态系统。这种跨国协作使我们能够在安全的前提下记录流离失所的模式，并在国际上提升对这一问题的认识，否则这些信息在中国境内可能会被压制。<br /><br />" +
    
    "<strong>我们的伦理承诺</strong><br />" +
    "我们深知对那些已面临严酷镇压的群体所肩负的重大责任。我们的工作遵循不断评估参与者风险并相应调整方法的原则，将他们的安全置于一切目标之上。受影响者掌控他们所分享的信息、信息的用途以及删除时机。我们确保所有参与者充分理解记录工作所带来的潜在利益与风险。<br /><br />" +
    "我们通过建立互信关系而非快速扩张，稳步构建抵抗网络间的可持续联系。通过定期的社区共创会议，我们确保平台能够随着运动需求和新兴威胁不断演进。我们的成功体现在能够安全地连接活动家网络、记录权利侵犯并在公众舆论中引发关于流离失所的讨论，同时保障我们服务对象的安全与尊严。<br />",
  
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
        question: "中国征地拆迁观察收集哪些数据？",
        answer:
          "我们收集定性和定量数据：<br>" +
          "<strong>民族志记录：</strong> 被驱逐居民的故事，他们的挣扎和反抗行动。<br />" +
          "<strong>卫星影像与地理信息系统数据：</strong> 用以追踪征地后土地利用的变化。<br />" +
          "<strong>财务分析：</strong> 追踪土地交易和房地产开发背后的资金流向。<br />" +
          "<strong>法律案件及请愿：</strong> 分析被征地居民如何在（或在法律体系之外）反击。"
      },
      {
        question: "谁资助中国征地拆迁观察？",
        answer:
          "我们的资金来源于 <strong>学术机构、研究资助和社会影响基金</strong>。目前，我们得到 <strong>MIT PKG IDEAS 社会创新挑战赛</strong> 的支持，该挑战赛为早期高影响力的项目提供资金。<strong>我们不接受那些在房地产投机或开发中拥有既得利益的政府或企业实体</strong>的资助。"
      },      
      {
        question: "问题3",
        answer: "答案3",
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
              <EnglishText dangerouslySetInnerHTML={{ __html: content.description }} />
            ) : (
              <ChineseText dangerouslySetInnerHTML={{ __html: content.description }} />
            )}
          </SectionBox>
        </Section>

        {/* FAQ Section */}
        <Section>
          <Header>
            <Lora>{content.faqHeader}</Lora>
          </Header>
          <FAQContainer>
            {content.faqs.map((faq, index) => (
              <FAQItem key={index}>
                <Question
                  onClick={() => toggleQuestion(index)}
                  isOpen={openQuestions.includes(index)}
                >
                  {faq.question}
                  <Arrow isOpen={openQuestions.includes(index)}>▼</Arrow>
                </Question>
                <Answer
                  isOpen={openQuestions.includes(index)}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
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
  white-space: pre-line;
`;

const ChineseText = styled.div`
  font-family: "Noto Serif";
  font-size: 16px;
  color: #000;
  margin-top: 16px;
  white-space: pre-line;
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
  font-weight: 900;
  color: #423f67;
`;

const Header = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
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

const SectionBox = styled.div`
  min-height: 980px;
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
  padding-bottom: 24px;
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
  color: ${(props) => (props.isOpen ? "#423f67" : "#1e1e1e")};
  transition: color 0.2s ease;
`;

const Answer = styled.div`
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
