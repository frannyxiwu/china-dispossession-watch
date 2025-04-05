import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const TacticalManual = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const sectionRefs = useRef({});

  // Function to scroll to a section when clicking on navigation
  const scrollToSection = (sectionId) => {
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  // Content structure with sections and subsections
  const tacticalManualSections = [
    {
      id: 'early-warnings-and-preparations',
      title: 'Early Warnings and Preparations',
      titleCh: '早期预警和准备',
      content: (
        <>
          <p><b>Situation:</b> You've heard rumors that your neighborhood or village might be slated for redevelopment. Perhaps a new district plan has been whispered about, or agents have been seen inspecting properties. Other early signs could include unofficial visits by development company agents trying to "survey" homes, local cadres holding meetings about "planning needs," or the sudden appearance of surveyors and construction teams in your area. </p>
          <p>Broader local trends can also provide critical early warnings: Have nearby neighborhoods or villages recently faced demolition or forced evictions? Is your area experiencing rapid gentrification or rising property values? Observe recent or planned changes to local infrastructure. Sudden infrastructure works — such as unexplained digging, new roads, relocated utilities, or public transportation connections — commonly precede land sales to developers, signaling a high likelihood of impending redevelopment.</p>
          <p><b>Recommended Actions:</b> In most cases, the machinery of dispossession does not arrive overnight but begins with informal signaling. Well before the appearance of formal notices, rumors and subtle administrative cues signal that demolition plans are underway. Being able to detect and interpret these early signs can buy precious time for preparation including evidence preservation, legal consultation, and community coordination. At this stage, you should quietly but proactively take several critical actions:</p>
          <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
            <li><b>Gather Information:</b> Discreetly verify whether redevelopment plans are confirmed or speculative. Engage cautiously with local officials, community leaders, or other credible sources who may have insights, cross-checking their information to build a clearer picture.</li>
            <p>Visit the local Planning Bureau, Land and Resources Bureau, or Natural Resources Office to inquire (as a concerned citizen) about upcoming zoning or infrastructure plans. If possible, look up your town or district's Five-Year Plan or Urban Redevelopment Master Plan online for notices and project approvals. Coded hints linked to redevelopment include 'special economic zones', 'urban-rural integration pilot areas', 'urban renewal', 'urban village transformation', 'old city renovation', 'village-enterprise land consolidation', and so on. Look up the terms you don't understand online.</p>
            
            <li><b>Document Your Rights:</b> Not having formal documentation will significantly weaken your position during resettlement negotiations. Therefore, gather, securely store, and make printed copies of all legal documentation verifying your ownership or residency status. Relevant documents include your property ownership certificate, land-use certificates, collective land contracts, tax records, utility receipts, building construction permits, and household registration. Tenants should similarly secure lease agreements or other proof of residency. </li>
            <p>In rural areas, property rights may be ambiguous, informal, or historically contested among villagers. Moreover, village cadres have been known to collect residents' property certificates under false pretenses before initiating demolition, deliberately reducing their bargaining power. Maintaining clear, organized documentation (even informal or partially complete ones) — and never surrendering originals to officials — protects you against tactics designed to undermine your property rights or tenancy claims.</p>
            
            <li><b>Get the Family Together:</b> Sit down with your household early and ask the following questions to build clarity and unity:</li>
            <ul className="hollow-bullets" style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
              <li>What outcome do we want from this situation? Do we hope to stay in place? Would relocation be acceptable under specific conditions, such as upgraded housing and financial compensation?</li>
              <li>What would we accept as fair compensation and outcome?</li>
              <li>What are we absolutely unwilling to accept? Identify your non-negotiables — such as keeping the family together, retaining your livelihoods in farming or animal husbandry, or keeping education and healthcare access intact.</li>
              <li>What risks are we prepared — or not prepared — to take? Assess your capacity to withstand pressure — from delays and harassment to financial uncertainty — especially if you have dependents, chronically ill family members, or debt. </li>
              <li>Who will serve as the main household spokespeople and petitioners?</li>
            </ul>
            <p>Write down your answers and refer back to them as the situation evolves. A clear internal goal will help you withstand external pressure and avoid family quarrels or second-guessing later on.</p>
          
            <li><b>Consult the Law:</b> Familiarize yourself with relevant legal provisions before tensions escalate. Essential legislation includes:</li>
            <ul className="hollow-bullets" style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
              <li>Property Rights Law (2007): affirms the constitutional right to compensation during lawful takings.</li>
              <li>Land Management Law (amended 2019): specifies required conditions, procedures, and compensation standards for rural land expropriation.</li>
              <li>Urban Housing Expropriation Regulations (2011): outlines notice requirements, public interest definitions, and compensation standards for urban home demolition.</li>
            </ul>
            <p>Understanding legal provisions regarding required notices, definitions of "public interest," and compensation standards equips you to identify and challenge illegal shortcuts authorities may attempt. If you have access to legal aid, consider seeking preliminary advice now to understand your legal options clearly.</p>
          
            <li><b>Connect with Neighbors:</b> Quietly initiate conversations with other potentially affected residents. Early coordination can lay the groundwork for collective resistance, but be aware that solidarity among residents often fractures under intense pressure from authorities, who combine coercive threats with financial inducements to provoke suspicion, betrayal, and division. When determining whom to trust, look beyond friendship or family ties: think about each household's vulnerabilities that could be exploited by authorities (such as family members with government employment or precarious financial situations), and clarify whether your goals genuinely align — be it remaining in place, securing higher compensation, or another outcome. Gauge their willingness to negotiate or resist together.</li>
            <p>Sharing information early also helps build a clearer picture of what’s happening and strengthens your ability to respond together. Authorities prefer to isolate residents and deal with them one by one; organized groups are harder to intimidate or manipulate. Begin establishing trust, commit to regular communication, and explore the possibility of collective action when the time comes.</p>
          
            <li><b>Security and Evidence:</b> Develop the habit of documenting any unusual activity or informal communication related to the situation in an incident log. If someone from a company or government agency contacts you, make a detailed record of the date, time, identity of the person (if known), and the content of the conversation. These notes may later serve as crucial evidence if the conflict escalates.</li>
            <p>Where safe and appropriate, discreetly photograph or record signs of early pressure tactics — such as visits from surveyors, unofficial notices, or covert monitoring. Store all materials securely, both physically and digitally. Discreetly back up these materials somewhere safe, like a trusted person’s home and device offsite. </p>
          </ul>
        </>
      ),
      contentCh: (
        <>
          <p><b>情况：</b>您听说您的社区或村庄可能被列入重建计划。也许有人低声谈论新的区域规划，或者有人看到代理人正在检查房产。其他早期迹象可能包括开发公司代理人非正式访问试图"调查"房屋，当地干部召开关于"规划需求"的会议，或者测量员和建筑队突然出现在您的地区。</p>
          <p>更广泛的当地趋势也可以提供关键的早期预警：附近的社区或村庄最近是否面临拆迁或强制驱逐？您所在地区是否正经历快速的中产阶级化或房产价值上升？观察当地基础设施的最近或计划中的变化。突然的基础设施工程——如无法解释的挖掘、新道路、迁移的公共设施或公共交通连接——通常在土地出售给开发商之前就已发生，这表明即将重建的可能性很高。</p>
          <p><b>建议行动：</b>在大多数情况下，征地拆迁的机制不会在一夜之间出现，而是从非正式的信号开始。在正式通知出现之前，谣言和微妙的行政暗示表明拆迁计划正在进行中。能够检测和解读这些早期迹象可以为准备工作争取宝贵的时间，包括证据保存、法律咨询和社区协调。在这个阶段，您应该安静但积极地采取几项关键行动：</p>
        </>
      )
    },
    {
      id: 'official-notice-of-demolition',
      title: 'Official Notice of Demolition/Expropriation',
      titleCh: '拆迁/征收正式通知',
      content: (
        <>
          <p><b>Situation:</b> The redevelopment moves from rumor to reality. You receive a notice or announcement – typically one of the following:</p>
          <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
          <li>An expropriation notice from the local government stating that your land or home will be acquired for a project. For urban properties, this might be issued under the 2011 Regulations on the Expropriation and Compensation of Houses on State-Owned Land, which requires a clear statement of public interest and a formal decision to acquire. For rural land, it may come under the Land Management Law, indicating a requisition for public use.</li>
          <li>A demolition and resettlement notice that includes a deadline by which you are expected to vacate, sometimes with an initial compensation offer or relocation plan.</li>
          <li>Public announcements posted in your neighborhood or village, listing affected households and outlining general compensation terms.</li>
          <li>Or, in many cases, you don't receive a notice at all — just oral orders, phone calls, or nothing at all. Local officials could be incentivized to withhold information about demolition and compensation to avoid resistance or negotiations.</li>
          </ul>

          <p>It is common for expropriation or demolition notices to omit critical details — such as relocation timelines, compensation terms, or your right to appeal. Notices may simply state that your property is being expropriated "in accordance with" a higher-level government instruction or plan, without offering further details. Notices may appear on your door, in the village bulletin board, or be delivered in-person by village cadres or demolition representatives. Regardless of format and content, this stage marks the beginning of a legal window where residents must act quickly and strategically.</p>
          
          <p><b>Recommended Actions:</b> Once an official notice is posted publicly or in hand:</p>
          <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
            <li><b>Authenticate the Notice:</b> Oftentimes, residents receive "community notices" that are vague or improperly formatted, e.g. missing issuing agencies or unclear legal bases. Examine the notice closely. Who issued it? Under what authority? Does it include a clear legal basis? Check for red stamps, formal file numbers, dates, and references to governing regulations. These omissions can render a notice invalid or open to challenge.</li>
            <p>Inspect whether the notice was issued by a legally authorized body — typically a county-level or higher People's Government. Village-level cadres and private developers have no legal power to issue expropriation or demolition notices, though they may pressure residents informally or through government proxies.</p>
            <p>Chinese law requires that takings be clearly in the "public interest." Legitimate purposes include infrastructure, public health, or environmental protections — not vague goals like "economic development". Commercial developments, market-rate housing, or tourism areas typically do not qualify under Article 8 of the Urban Housing Expropriation Regulations (2011) and Articles 45–47 of the Land Management Law (2019 Revised).</p>
            <p>Check whether your property is actually within the designated demolition or expropriation zone. You may need to visit the local Natural Resources Bureau, Housing and Urban-Rural Development Bureau, or Township Government Office to request access to planning documents, redline maps, or project approval records. Determine the timeline: For example, has a project approval document been issued? Has a social stability risk assessment been completed? These are legally required before demolition can proceed.</p>
            <p>If the notice is forged or procedurally invalid, document these irregularities in detail. They will later serve as grounds for a formal legal challenge.</p>
            
            <li><b>Understand Your Legal Windows:</b> Under Chinese administrative law, you generally have 60 days to request administrative reconsideration and 6 months to file an administrative lawsuit, starting from the date you became aware of the government action. Do not wait passively for additional information — start seeking legal consultation to confirm what deadlines apply in your case. Even if you ultimately choose not to go to court, preserving your legal standing through timely filings may help delay enforcement or strengthen your position down the line.</li>
            
            <li><b>Immediate Legal Action (if warranted):</b> Remember, you have the right to challenge government takings under Chinese law. If you already know your goal is to remain in place and the project clearly violates legal requirements — for example, it was issued by an unauthorized body, omits legal basis or procedures, offers inadequate or secretive compensation, or fails to provide means of contest or appeal — consider filing for administrative reconsideration or an administrative lawsuit without delay.</li>
            <p>In many cases, residents wait until negotiations break down or until they are threatened, harassed, or harmed before taking legal action. However, if you already have clarity on your goals, initiating legal procedures early can signal that you are informed, capable, and will not be an easy target. In some localities, you may be able to directly challenge the expropriation notice itself. These procedures are relatively low-cost and could buy time or force a re-examination of the project.</p>
            
            <li><b>Seek Clarity on Compensation Policy:</b> In some cases, the notice may come with a general compensation and resettlement plan. Ask the issuing department for the full text of the compensation scheme if possible.</li>
            <p>By law, urban expropriation compensation must "not be lower than the market value" of comparable properties (Urban Housing Expropriation Regulations, Article 19). For rural expropriation, compensation calculations should be specified — including the valuation of homes, relocation arrangements, and, importantly, how land, residential land use rights, and physical structures on the land are assessed. If you have rural household registration, you should demand compensation for your land-use rights, livelihood losses, and production tools like livestock pens, workshops, or orchards (Land Management Law, Article 48). Compensation for livelihood loss is often omitted or downplayed in practice, and residents are simply relocated into urban resettlement housing with little or no support to rebuild income-generating activities. This is not fair, especially since existing social security benefits for rural residents are minimal.</p>
            <p>In other cases, compensation terms are not made public at all. Instead, local officials may attempt to privately negotiate with each household behind closed doors. This lack of transparency is often used to erode your collective front and extract greater concessions. If compensation standards are not clearly posted or explained, you have the right to request the full compensation plan from your village committee or local housing bureau. Document any refusal to disclose this information, as lack of transparency and inconsistent treatment of similarly situated residents may constitute procedural violations.</p>
            <p>In reality, rural land is typically collectively owned, and compensation is often directed to the village collective. Village cadres frequently undervalue assets, obscure compensation standards, and distribute funds unequally or opaquely. Be mentally prepared to encounter compensation figures that are shockingly low. It's completely understandable to feel overwhelmed or distressed when your life's assets are grossly undervalued — but try to combat feelings of anxiety and anger, and focus on staying strategic. If possible, begin seeking independent appraisals of your property and land early to help you counter lowball offers later in the negotiation process.</p>
            
            <li><b>Preserve Evidence:</b> Make copies or take clear photographs of the notice and any accompanying materials. If officials deliver it to you in person, record the whole conversation discreetly and document the date, time, and their identities.</li>
            <p>Ask for their names and job titles, and write down the badge numbers of any law enforcement officers who accompany them or approach you separately during this time. This documentation may be critical later if the government claims you were properly informed or if the content or delivery of the notice is disputed. If your requests for procedural and compensation transparency are denied, document the denials to include in future appeals — lack of disclosure violates the principles of due process and informed consent required in administrative actions.</p>
            
            <li><b>Organize Neighbors:</b> Chances are your neighbors received the same notices. This is the time to quietly expand and convene your informal group from Stage 1.1. Share information and consider pooling resources to consult someone with legal knowledge.</li>
            <p>A united front allows you to request a public meeting or demand a formal consultation process with the authorities rather than enter into isolated discussions where people are more easily pressured. Be aware, however, that the authorities will actively misdirect, manipulate, and attempt to wear down your unity. They might offer slightly better terms to early signers, threaten holdouts with minimal compensation or retaliation, or even spread false rumors about vocal residents to sow distrust. Whenever possible, work toward identifying a shared goal and establish a pact to pursue it together.</p>
            
            <li><b>Connecting to the Broader Movement:</b> At this stage, you may feel overwhelmed and helpless due to inexperience. Reaching out can seem risky or even pointless under heavy censorship and suppression of this subject matter.</li>
            <p>But know this: the Chinese media landscape, online content, and even what feels "acceptable" to say in daily life are the products of years of systematic state control. If your reality feels distant from what you see in the news or on social media, it's not because people like you don't exist — rights defenders are everywhere and are being deliberately kept from seeing one another. Understanding and learning to operate within the constraints of censorship is a necessary learning curve for every activist.</p>
            <p>Try to connect with someone experienced - perhaps a neighbor whose property home was demolished years ago and has been through legal battles, petitioning and lettering, and arbitrations. Absorb their knowledge, practical strategies, and connections built through years of struggle. Online, you might search for answers to your questions or post anonymously in forums or on social media. If your content is censored, try using alternative words or phrasing. Each connection — online or off — can empower you with information and skills.</p>
          </ul>
          <p>It's important to understand that an official notice does not mean demolition is imminent — many cases remain stalled for months or years. Bureaucracies move slowly and imperfectly; your preparedness and legal awareness already make you a more formidable opponent. At this stage, authorities often count on the sense of shock, urgency, and inevitability to push residents into quick compliance. This is also when fear tactics may begin — you might receive visits urging you to "cooperate for your own good" or warnings that resistance will leave you with nothing. To disrupt this rhythm, stand firm and know your rights: by law, even if you refuse to sign a compensation agreement, the government cannot evict you immediately without following legal procedures. That said, illegal demolitions do happen — often suddenly, and sometimes violently. So while asserting rights, also take practical precautions: Let someone you trust know if you're called in for a "talk" with officials. Avoid leaving your home unattended for long periods if you suspect a hastened demolition timeline is possible.</p>
        </>
      ),
    },
    {
      id: 'negotiating-compensation',
      title: 'Negotiating Compensation',
      titleCh: '协商补偿',
      content: (
        <>
          {/* --- EXACT ORIGINAL TEXT FROM YOUR STAGE 1.3 --- */}
          <p><b>Situation:</b> Following the issuance of expropriation notices, a period of negotiation usually follows. Local officials or developer representatives will approach each household to discuss terms — usually a combination of monetary payment and the promise of a resettlement apartment calculated based on the square footage of your current home. In many cases, residents find these initial offers inadequate – below market value, not accounting for livelihood losses, and failing to restore your previous standard of living. Sometimes offers may seem generous on the surface—double-check all the caveats, because they are often designed to appear more favorable than they actually are.</p>
          <p>This stage is more than a simple meeting talking numbers — it's a high-pressure stage used to divide households, suppress dissent, and create the illusion of voluntary compliance. Officials may stress the “generosity” of the offer and apply social pressure, saying things like, “Most of your neighbors have signed — why haven’t you?”, even if they are untrue. Recognize that what is presented as a negotiation is actually a critical test of your resolve, preparation, and coordination. This stage can last weeks or months, but once enough households have signed and left, authorities may escalate to more aggressive tactics.</p>

          <p><b>Recommended Actions:</b></p>
          <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
            <li><b>Collective Bargaining:</b> Whenever possible, negotiate together rather than individually. Joint meetings between an organized resident’s committee and the village cadres limit officials’ ability to make false promises, apply selective pressure, or spread misinformation. Agree beforehand on a basic set of shared demands — such as a minimum price per square meter, fair relocation options, or adjustments for families with special needs. Present your position as a clear list of requirements, not as personal pleas or favors. This approach repositions the negotiation as a consultation on terms, not a one-sided offer.</li>
            <li><b>Know the Value:</b> By this stage, you should have gathered some data on local market prices (for urban residents) or the appraisals and use value of your land and buildings (for rural residents). If the government or developer’s valuation contradicts yours, confidently point out the discrepancies, and present your demands as grounded in law and valuation.</li>
            <p>Prepare your expected compensation outcomes in detail, but never reveal your internal expectations confidential — do not give them an opportunity to anchor their negotiations below your bottom line. Officials may not immediately budge, but demonstrating your knowledge — and ability to identify and challenge deliberate undervaluation tactics — signals to them that you are a serious player who cannot be easily manipulated.</p>

            <li><b>Assert Your Leverage:</b> A critical part of negotiation is recognizing and subtly deploying your full range of bargaining chips. These might include doubts about whether the project genuinely serves the public interest, gaps in legally mandated procedures, inconsistencies in compensation standards, or unlawful pressure tactics. You don't need to be confrontational or accusatory. Instead, hint at your awareness and readiness to escalate if necessary. A line like, “According to national policy, commercial projects generally aren’t supposed to move forward without genuine resident consent—so perhaps it would be better for everyone if we could arrive at a mutually acceptable agreement, rather than risk this being questioned later by higher authorities,” can be effective. This keeps the tone cooperative and measured while implying your willingness to escalate. When officials perceive that you’re capable of applying pressure and creating delay, they’re more likely to seek compromise to avoid complications.</li>
            
            <li><b>Record Everything:</b> Keep detailed notes of all negotiation meetings, including time, location, participants, and what was said. Better yet, audio-record (surreptitiously and as you feel safe) all discussions with officials or demolition company staff. Always store backups of your recordings and notes in multiple secure locations. Officials and demolition agents often make promises that never make it into formal agreements, such as “We’ll give you a bigger apartment elsewhere, just sign now.” If you don’t have a recording, you may have no way to prove what was offered — or threatened.</li>
            <p>To record discreetly, use well-concealed devices like small voice recorders, button or pen-shaped tools, or pinhole cameras. These are inexpensive and widely available on platforms like Taobao. Some activists keep their phones recording from their shirt pocket; others embed mini devices in bags or jackets. Test devices in advance so you know battery life, storage capacity, and how to retrieve files quickly.</p>
            <p>In high-risk situations — such as if you're abducted or forcibly taken to a negotiation session — you may not have time to carry recording devices, and any phones or visible electronics may be confiscated or destroyed. In those cases, preemptive strategies are key. If possible, consider installing hidden cameras around your property in advance, especially near entry points or meeting spots. You can also inform trusted neighbors or relatives to be on standby and record from a distance when suspicious visitors arrive, or if they hear commotion associated with abducting or targeted violence. Collective vigilance can ensure someone captures what you can’t.</p>

            <li><b>Bring a Companion:</b> Don’t go alone to meetings if you can help it. Negotiation meetings can be disorienting, and it is helpful to attend with a composed, informed family member. Choose someone who has your back (aligns with your demands and won’t contradict you in front of the officials) and who will not be easily swayed or intimidated. After the meeting, hold a debrief and review together what was said, what was implied, and what your next steps are. This is essential to build institutional memory across your household and maintain cohesion under pressure.</li>

            <li><b>Stay Calm and Don’t Show Your Cards:</b> As a general rule, demolition officers will continuously build profiles of their targets – understanding their personalities, backgrounds, and weaknesses. They observe your behavior, reactions, and statements to assess your resolve. If you appear scared, hesitant, or easily flustered, they might take your demands less seriously because they'll perceive you as unlikely to be a persistent and impactful "nail household." By demonstrating strong emotional control, you force them to treat your position with greater consideration and respect.</li>
            <p>If you show anxiety, hesitation, or urgency in the negotiating meeting, they may interpret it as a signal that additional pressure will cause you to concede. Instead, adopt a calm and neutral demeanor. Repeat your points clearly and do not respond to provocations. Maintain silence when you need to; the less you speak, the fewer opportunities they have to manipulate or misinterpret your words.</p>
            <p>Negotiators are trained to provoke and manipulate emotions – they might intimidate you, belittle you, or conversely act sympathetic to coax information. If you get emotional and say something in haste (e.g., a threat or admission), it could be used against you. Remember, you are not doing anything wrong by seeking a fair deal; they are the ones displacing you. So hold the high ground in spirits and stay composed.</p>

            <li><b>Delay if Needed:</b> Many deadlines given in these negotiations are artificial and intended to rush you. If the terms presented are not acceptable, you are under no obligation to sign immediately. Keep raising questions, requesting clarification, asking for another meeting, etc. In some cases, the developers or officials are under pressure to meet looming inspections, funding, or construction deadlines, meaning they have far more to lose from delays than you do. By dragging out negotiations, you increase their costs and pressure, which might force them to improve terms.</li>
            
            <p>Assess the situation: Are other residents caving? Developers dislike one "nail house" holding up a billion-yuan project, and local officials face pressure to induce unresolved holdouts. Be aware, though, that this can also backfire as authorities often make an example of “stubborn holdouts” through targeted retaliation — such as intensified harassment, intimidation, physical assault, false imprisonment, or expedited forced demolition.</p>
          </ul>
          <p>The “bargaining demolition” dynamic in China is essentially a high-stakes game of chicken requiring judgment calls on both sides. Negotiation is a pivotal stage where expropriation-related conflicts can either resolve or escalate. If a relatively fair deal can be reached, it’s often pragmatically the best outcome, as prolonged resistance can be both exhausting and risky for you. However, do not feel compelled to accept a blatantly unfair deal out of fear.</p>
          <p>Lastly, never sign anything you don’t fully understand or agree with. Many residents have been coerced or deceived into signing blank agreements that were later filled in with unequal terms. Instead of engaging with the main activists of a household, authorities often circumvent them to target those who are elderly, unwell, less informed, or not formally listed as property owners. Instruct your family members not to act alone — if approached by officials, they should say 'I don’t know' or 'I’m not the decision-maker,' rather than agreeing to meet with them or sign any agreement. If someone in your household is forced to sign under duress, report it to the police immediately and press for an official investigation and written record; this may help contest or nullify the contract later.</p>
        </>
      ),
      // If you have a Chinese version of 1.3 in your source text, place it here exactly as is.
      // Otherwise, you can leave it empty or replicate the English text.
      contentCh: (
        <>
        </>
      )
    },
    {
      id: 'legal-action',
      title: 'Legal Action',
      titleCh: '法律行动',
      content: (
        <>
          {/* --- EXACT ORIGINAL TEXT FROM YOUR STAGE 1.4 --- */}
          <p><b>Situation:</b> Negotiations have either broken down or reached an impasse. You’ve refused to sign an agreement, or you signed under pressure and want to contest it. Despite unresolved disputes, the authorities may have issued a Demolition Order or an Expropriation Decision declaring your property will be taken, or they may have begun forced demolition altogether. This is often the trigger for formal legal action on your part. Legal action is not simply about “suing” — it is a strategic battlefield that can buy time, increase your leverage, and expose procedural violations. Winning in court and reversing illegal expropriation is possible, but extremely rare. The more realistic goals are delaying demolition, raising the cost of misconduct, and establishing a documented record of resistance.</p>

          <p>There are three main legal pathways to consider: administrative litigation, administrative reconsideration, and civil lawsuits. Administrative reconsideration is faster and less costly but typically handled by the same bureaucracy that issued the original decision. Administrative litigation offers slightly more independence but is slower and more formal. Civil litigation may be appropriate when third-party actors, such as demolition contractors, commit property damage, fraud, trespass, or physical violence. These civil suits can shift blame away from political issues and may be more palatable for courts to accept and process.</p>

          <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
            <li><b>Administrative Litigation:</b> If you receive a formal demolition or expropriation decision, you can sue the issuing government entity under the Administrative Litigation Law (revised in 2014). Common legal arguments include lack of a valid public interest rationale, absence of procedural requirements (such as hearings or notices), inadequate compensation (not “fair and reasonable”), or abuse of administrative power. Courts rarely rule in favor of evictees — success rates remain under 10% — but merely filing can deter hasty demolition and force negotiations. Since 2015, a system known as the Chief Official Appearance System requires responsible government officials to attend certain trials in person, which has correlated with higher settlement rates. If your case qualifies, insist that the decision-maker appear in court. Even if you lose, you will have bought time and added pressure. Submit your case with clear evidence of violations. Lawyers are recommended but not required. If the local court blocks your case or stalls, escalate to the provincial high court or submit procedural complaints to the Supreme People’s Court.</li>
            <li><b>Administrative Reconsideration:</b> This is a faster, cheaper alternative — or precursor — to litigation. You request a higher-level administrative body to review the original decision. For example, if a county government issued the demolition order, you may apply to the municipal or provincial government for reconsideration. While many reconsideration outcomes are rubber-stamped, higher levels occasionally reverse unlawful decisions, especially when procedures were flagrantly violated or if public attention is growing. You must typically file within 60 days of learning about the decision. Filing reconsideration does not eliminate your right to sue — some residents use both channels in parallel. Although reconsideration offices are not independent, their rulings carry administrative weight and can be cited in further proceedings.</li>
            <li><b>Civil Lawsuits:</b> In addition to suing the government, you may have grounds to sue other actors. If you suffered violence, threats, fraud, or property damage during the demolition process, you may pursue civil litigation against demolition companies, subcontractors, or individuals involved. There have been cases where evictees sued demolition companies for illegal acts and won small damages. Civil suits might be easier to get accepted by the court, since they can be framed as tort disputes rather than sensitive administrative issues. While they are unlikely to halt demolition, a well-timed civil suit (e.g., for an injunction against a developer trespassing on your land) could complicate the adversary’s plans. Also, if you signed a relocation agreement under duress and regret it, you might sue to rescind the contract based on lack of consent. Courts occasionally void such contracts when fraud or pressure is well-documented.</li>
            <li><b>Constitutional and Oversight Avenues:</b> Although China lacks a direct mechanism for citizens to sue under the Constitution, you can cite constitutional principles in your court filings. The 2004 Property Rights Amendment protects private property and affirms that expropriation must be for public interest and with compensation. While courts rarely rule on constitutional claims, referencing them may strengthen your case politically. You or your lawyer can also petition the National People’s Congress or its Standing Committee to review whether local policies violate the Constitution. Such reviews are rare and not transparent, but the mere attempt can draw attention. Separately, you can file complaints with the Central Commission for Discipline Inspection or the Ministry of Supervision for abuse of power or corruption. While disciplinary bodies prioritize Party discipline, local misconduct framed as graft or abuse may trigger investigation.</li>
            <li><b>Petition Concurrently:</b> (This overlaps with Stage 1.5, but relevant here.) In parallel with court filings, you can use the Letters and Visits petitioning system to apply pressure. Mail or deliver copies of your petitions and legal documents to both the provincial Letters and Visits Office and the State Bureau for Letters and Visits in Beijing. There’s a chance – albeit slim – that officials there will intervene or pass instructions to hold off demolition pending resolution. At minimum, it adds political weight to your legal fight, as local officials hate when their superiors in Beijing start inquiring about a petition. Be cautious: petitioning can lead to reprisals, which we'll discuss more in Stage 1.5, so carefully plan your course of action.</li>
          </ul>

          <p><b>Recommended Actions:</b></p>
          <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
            <li><b>Build a Solid Case File:</b> The stronger your documentation, the greater your chances of acceptance and success. Gather all relevant materials: property records, photos, videos, maps, official notices, correspondence with officials, audio recordings, witness statements, police reports, medical records, and so on. Back them up digitally and store a copy offsite.</li>
            <li><b>Identify the Core Violation:</b> Do not try to argue every point. Instead, focus on one or two high-impact violations: no public interest basis, absence of proper notice, forged documents, lack of social stability risk assessment, or missing compensation disclosures. Procedural flaws are far easier for courts to acknowledge than political critiques.</li>
            <li><b>Coordinate with Other Litigants:</b> If multiple households were affected, consider joint litigation. File simultaneously or reference each other’s cases. You don’t need to consolidate into a class action, share a lawyer, or sue under one name. Courts are more hesitant to dismiss a pattern than an isolated complaint. Organized groups signal social risk, which some courts seek to minimize by encouraging settlements.</li>
            <li><b>Choose the Right Court:</b> If possible, avoid filing in local courts tightly linked to government interests. If the lower court refuses to accept or mishandles your case, escalate to the next level or submit a formal complaint to the relevant court’s supervising judicial bureau. Courts in major cities or provincial capitals tend to be slightly more independent.</li>
            <li><b>Lawyer or Citizen Representative:</b> Most lawyers are reluctant to get involved in sensitive disputes or charge prohibitively high consultation fees. If this is the case, consider reaching out to a legal aid group or a citizen legal representative — often experienced evictees who have studied the law on their own to help themselves and others fight dispossession. You can frequently find such individuals through local Anti-Demolition Alliances. Some will be willing to support you, even behind the scenes.</li>
          </ul>

          <p>Legal resistance in China’s context is inherently tricky. You are, in essence, asking the system to check itself. Many evictees find legal systems deeply frustrating and ineffectual: bureaucratic, opaque, ruthlessly biased. Courts may refuse to accept your case—some have historically declined to docket eviction cases, citing lack of jurisdiction. Even if your case is accepted, you may face interference: local governments can pressure courts to rule against you or deliberately stall the process until your home is demolished, rendering the case moot. They might rule against you with all kinds of rage-inducing reasons: in one case, a court scheduled hearings while the plaintiff was still hospitalized from demolition enforcers’ beatings, then ruled against them for failing to appear. So why do it? Because even if the final outcome is unfavorable, these efforts serve several purposes: (1) Delay – dragging out the process in hopes something changes (political winds and policy priorities can shift rapidly), (2) Negotiation leverage – the more obstacles you create through litigation, the more likely the other side is to offer improved terms to resolve the impasse, and (3) Documentation – creating a public, formal record that you pursued every legal avenue can serve as a foundation for future accountability and offers you personal clarity: that you fought not just with passion, but with reason.</p>

          <p>There have been rare victories: court rulings overturning demolitions, ordering increased compensation, or halting illegal procedures, especially in recent years with increased emphasis on rule of law. And even modest wins count – for example, if your lawsuit prompts a mediation where the government agrees to give you an extra payout to settle. Don’t pin all hopes on the courts, but don’t neglect them either. And if you do get a court injunction or decision in your favor, even partially or symbolically, publicize it to ensure it’s respected. Local governments sometimes ignore court orders unless shamed into compliance. Visibility is protection.</p>

          <p>Remember, legal action is not the endpoint, but one tool among many. Many cases that yield favorable results are resolved outside of court — often after litigation has begun. Use the courts to buy time, to assert your seriousness, and to shift the balance of power. Let the other side know you’re ready to go the distance — but always stay open to resolution. A well-timed, well-documented lawsuit can change the game.</p>
        </>
      ),
      // If you have a Chinese version of 1.4 in your source text, place it here exactly as is.
      // Otherwise, you can leave it empty or replicate the English text.
      contentCh: (
        <>
        </>
      )
    },
  ];
  
  // Outline for left panel navigation with main sections and subsections
  const outline = [
    {
      id: 'early-warnings-and-preparations',
      title: '1.1 Early Warnings and Preparations',
      titleCh: '1.1 早期预警和准备',
      subsections: []
    },
    {
      id: 'official-notice-of-demolition',
      title: '1.2 Official Notice of Demolition',
      titleCh: '1.2 拆迁/征收正式通知',
      subsections: []
    },
    {
      id: 'negotiating-compensation',
      title: '1.3 Negotiating Compensation',
      titleCh: '1.3 协商补偿',
      subsections: []
    },
    {
      id: 'legal-action',
      title: '1.4 Legal Action',
      titleCh: '1.4 法律行动',
      subsections: []
    },
  ];

  // Simplified ref setup that doesn't rely on DOM
  useEffect(() => {
    // Basic setup of main section refs only
    setTimeout(() => {
      tacticalManualSections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          sectionRefs.current[section.id] = el;
        }
      });
      
      // Set up subsection refs
      document.querySelectorAll('h3[id]').forEach(el => {
        sectionRefs.current[el.id] = el;
      });
    }, 500);
  }, [currentLang]);

  return (
    <Wrapper>
      <ProfileTopBar>
        <LeftSection>
          {currentLang === 'en' ? (
            <Title>Tactical Manual</Title>
          ) : (
            <Title>战术手册</Title>
          )}
        </LeftSection>
      </ProfileTopBar>

      <ContentWrapper>
        <LeftPanel>
          <OutlineContainer>
            <OutlineTitle>{currentLang === 'en' ? 'Contents' : '目录'}</OutlineTitle>
            {outline && outline.map((section) => (
              <div key={section.id}>
                <SectionLink 
                  onClick={() => scrollToSection(section.id)}
                >
                  {currentLang === 'en' ? section.title : section.titleCh}
                </SectionLink>
                {section.subsections && section.subsections.length > 0 && (
                  <SubsectionList>
                    {section.subsections.map((subsection) => (
                      <SubsectionItem key={subsection.id}>
                        <SubsectionLink 
                          onClick={() => scrollToSection(subsection.id)}
                        >
                          {currentLang === 'en' ? subsection.title : subsection.titleCh}
                        </SubsectionLink>
                      </SubsectionItem>
                    ))}
                  </SubsectionList>
                )}
              </div>
            ))}
          </OutlineContainer>
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

              {tacticalManualSections && tacticalManualSections.map((section) => (
                <Section 
                  key={section.id} 
                  id={section.id}
                >
                  <SectionTitle>
                    {currentLang === 'en' ? section.title : section.titleCh}
                  </SectionTitle>
                  <SectionContent>
                    {currentLang === 'en' ? section.content : section.contentCh}
                  </SectionContent>
                </Section>
              ))}
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

export default TacticalManual;

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
  flex: 0.75;
  overflow-y: auto;
  border-right: 1px solid rgba(66, 63, 103, 0.25);
  padding: 20px 10px;
`;

const OutlineContainer = styled.div`
  padding: 10px;
`;

const OutlineTitle = styled.h2`
  font-family: 'Lora', serif;
  font-size: 18px;
  color: #423F67;
  margin-bottom: 16px;
`;

const SectionLink = styled.div`
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 16px;
  color: #423F67;
  margin-bottom: 10px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SubsectionList = styled.ul`
  list-style-type: none;
  padding-left: 15px;
  margin-bottom: 20px;
`;

const SubsectionItem = styled.li`
  margin-bottom: 8px;
`;

const SubsectionLink = styled.div`
  font-family: 'Lora', serif;
  font-size: 14px;
  color: #423F67;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
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
  flex: 0.75;
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

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-family: 'Lora', serif;
  font-size: 16px;
  color: #423F67;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const SectionContent = styled.div`
  h3 {
    font-family: 'Lora', serif;
    font-size: 20px;
    color: #423F67;
    margin: 25px 0 15px;
  }
  
  h4 {
    font-family: 'Lora', serif;
    font-size: 18px;
    color: #423F67;
    margin: 20px 0 12px;
  }
  
  p {
    font-family: 'Lora', serif;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  ul, ol {
    padding-left: 20px;
    margin-bottom: 15px;
  }
  
  li {
    font-family: 'Lora', serif;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  
  strong {
    font-weight: 600;
  }
  
  /* Style for hollow bullets */
  ul.hollow-bullets {
    list-style: none;
    padding-left: 20px;
  }
  
  ul.hollow-bullets li {
    position: relative;
    padding-left: 5px;
  }
  
  ul.hollow-bullets li:before {
    content: "○";
    position: absolute;
    left: -20px;
    color: #423F67;
  }
`;
