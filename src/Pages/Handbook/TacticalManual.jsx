import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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
       <p><b>情况：</b>拆迁进入正式阶段，传言成为现实。您收到了政府或相关单位的正式通知，通常包括以下几种形式：</p>
       <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
       <li>地方政府发布的征收通知，声明您的土地或房屋将因某项工程项目被征收。城市地区的通知一般依据《国有土地上房屋征收与补偿条例》（2011年）发布，需明确说明“公共利益”并做出正式征收决定；农村地区则可能依据《土地管理法》，说明因“公共用途”需要征地。</li>
       <li>包含搬迁期限的拆迁安置通知，有时附带初步补偿方案或安置计划。</li>
       <li>张贴在社区或村庄公告栏中的公共通告，列明受影响住户及补偿大致方案。</li>
       <li>许多情况下，您可能根本没有收到书面通知——只有口头命令、电话告知，甚至什么都没有。地方干部可能有动机隐瞒信息以避免居民反对或协商。</li>
       </ul>

       <p>征收或拆迁通知常常缺少关键内容，例如搬迁时间表、补偿条款或上诉权利说明。有时仅写道“依据上级文件征收”，未说明细节。这些通知可能贴在您家门上、公告栏，或由村干部上门递送。无论形式如何，这标志着法律行动的窗口开启，居民需快速、策略性应对。</p>

       <p><b>建议行动：</b>收到正式通知后：</p>
       <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
       <li><b>核查通知真伪：</b>居民常收到内容模糊、格式不当的“社区通知”，缺少盖章、发文机关、法律依据等。请检查：是否由县级以上人民政府发布？是否有红章、公文编号、发文日期？依据哪些法规？如果通知缺乏法律依据或由无权机关发布（如村干部、开发商），则可能无效，您可据此提出异议。</li>
       <li><b>了解法律期限：</b>依据中国行政法，居民通常有60天申请行政复议、6个月提起行政诉讼的权利，从得知该决定之日开始计算。请勿被动等待，应立刻咨询法律专业人士，确认自己在法律上可采取的行动。</li>
       <li><b>立即采取法律行动（如必要）：</b>如您决定坚守住房且认为该项目违反法律（如程序缺失、补偿不公、未说明公共利益等），可考虑立即申请复议或提起行政诉讼。及早行动可显示您的立场和准备，震慑对方。</li>
       <li><b>核查补偿政策：</b>如通知中含有补偿方案，请向相关单位索要详细文件。法律规定，城市征收补偿不得低于市场价值，农村征地应包括土地使用权、房屋、附属设施、农具、牲畜棚舍等补偿。如属农村户籍，务必要求对生计损失进行合理赔偿。</li>
       <li><b>保存证据：</b>请拍照或复印通知，记录送达人员的姓名、职务、送达时间、谈话内容。如遭拒绝公开补偿或程序信息，也应记录下来，作为将来上诉证据。</li>
       <li><b>组织邻居：</b>如果其他邻居也收到类似通知，可以秘密接触、共享信息，建立非正式小组，共同寻求法律咨询，形成集体行动基础。</li>
       <li><b>连结更广抗争网络：</b>请尝试联系有经验者（如曾上访或维权的邻居），获取实务经验和资源。网络搜索、匿名发帖亦可尝试。审查并不等于孤立，您并不孤单。</li>
       </ul>

       <p>请记住，收到通知并不代表强拆马上发生。许多项目因审批、资金或政策变动而停滞数月乃至数年。官员通常利用“紧迫感”与“突然性”制造压力，诱使居民快速服从。请保持冷静，坚持合法权利：即使您拒绝签字，政府仍须依法履行程序，不能立即强拆。当然，非法强拆确实存在，因此请同时采取实际防范措施，如避免长时间外出、通知亲友留意动向等。</p>
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
    contentCh: (
  <>
    <p><b>情况：</b>拆迁已从传言变为现实。您收到了通知或公告——通常包括以下几种形式：</p>
    <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
      <li>来自地方政府的征收公告，声明您的土地或房屋将被用于某个项目。在城市地区，这类公告一般依据《国有土地上房屋征收与补偿条例》（2011年）发布，要求明确说明“公共利益”并正式决定征收。在农村地区，则可能依据《土地管理法》，说明为“公共用途”征用。</li>
      <li>包含搬迁期限的拆迁安置通知，可能附带初步的补偿方案或安置计划。</li>
      <li>张贴于您所在社区或村庄的公告，列出受影响的住户，并概述补偿标准。</li>
      <li>也有很多情况中，您根本收不到正式通知——只有口头命令、电话告知，甚至什么都没有。地方官员有时会刻意隐瞒拆迁和补偿信息，以减少居民抵抗或避免协商。</li>
    </ul>

    <p>征收或拆迁通知常常缺少关键细节，例如搬迁时间表、补偿标准或申诉权利。有时仅模糊地写着“根据上级政府指示征收”，并未详细说明。这些通知可能贴在您家门口、村委公告栏，或由村干部或拆迁方人员上门递送。无论形式如何，这一阶段标志着法律博弈窗口的开启，居民必须迅速且策略性地采取行动。</p>

    <p><b>建议行动：</b>一旦收到或看到正式通知：</p>
    <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
      <li><b>核实通知的合法性：</b>很多居民收到的所谓“社区通知”内容模糊、格式不规范，缺少发文机关、法律依据等。请仔细检查：是谁发布的？具备什么法定权限？是否注明法律依据？是否盖有红章、编号、日期、所依据的法规？这些细节缺失可能使通知在法律上无效。</li>
      <p>查看是否由具备法定资格的机构发布——通常应为县级及以上人民政府。村干部或开发商无权发布正式征收或拆迁通知，即便他们常以政府“代言人”身份施压。</p>
      <p>中国法律规定，征收必须“基于公共利益”。合法项目包括基础设施、公共健康、环境保护等，而“经济发展”这类模糊目的并不构成公共利益。《国有土地房屋征收条例》第八条、《土地管理法》第45–47条对此有明确限定。</p>
      <p>请核查您的房产是否确实位于征收红线内。您可能需要前往自然资源局、住建局或乡镇政府，申请查阅红线图、规划批文、项目审批等材料。查看项目是否已经批准？是否完成社会稳定风险评估？这些步骤在法律上是强制前置程序。</p>
      <p>若您发现通知为伪造或程序违法，请详实记录所有异常之处，日后可作为提起法律程序的重要证据。</p>

      <li><b>明确法律时效：</b>依据《行政诉讼法》，您通常有60天时间申请行政复议，或6个月时间提起行政诉讼（从知道该行政行为之日起计算）。不要被动等待下一步消息，应尽快寻求法律咨询，确认自身所处的时效期限。即便最终不打官司，及时保留法律主张也可能延缓强制执行、增加博弈筹码。</li>

      <li><b>必要时立即行动：</b>您有权依法对征收决定提出异议。如果您已决定坚守原地，而该项目明显违法（如无法律依据、程序不全、补偿标准低或不透明、无异议渠道等），可立即申请行政复议或提起诉讼。</li>
      <p>许多居民拖到协商失败或遭威胁、骚扰后才启动法律行动。但如果您目标明确，越早启动法律程序越能展示您的清晰判断和坚决立场，令对方不敢轻视。在一些地方，您甚至可以直接起诉征收通知。程序成本低、可争取时间或迫使项目重新审查。</p>

      <li><b>弄清补偿政策：</b>通知中如附带补偿安置方案，请主动向发文部门索要完整文件。</li>
      <p>城市征收依法不得低于同类房产市场价值（《征收条例》第19条）；农村征地应详列补偿构成，如房屋评估、搬迁安排、土地及附属物折算标准等。如您为农村户籍，应主张土地使用权、生产生活损失及畜棚、作坊、果园等生产设施的补偿（《土地管理法》第48条）。实践中，“生计损失”常被忽视，农户仅被安置进城市楼房，缺乏恢复生计支持。这种处理极不公平，尤其在当前农村社保体系极为薄弱的情况下。</p>
      <p>若补偿方案根本未公开，或官员私下逐户“谈话”，这往往是分化瓦解集体力量的策略。如未明确公示补偿标准，您有权向村委或住建部门申请查看原文件，并记录拒绝公开的过程——这可能构成程序违法证据。</p>
      <p>实际中，农村土地属集体所有，补偿款往往由村集体代收。村干部可能压低资产估值、隐瞒分配标准，甚至暗箱操作，极不透明。请做好思想准备：补偿金额可能远低于您心理预期。情绪上的愤怒与沮丧可以理解，但更重要的是保持冷静与策略性。若条件允许，尽早聘请独立评估机构为您的房产出具估价报告，为后续博弈奠定基础。</p>

      <li><b>保存证据：</b>复印或拍照保存所有通知和相关文件。如官员上门递送，悄悄录音记录谈话内容，并记录时间、人员身份等信息。</li>
      <p>询问其姓名、职务，若有执法人员陪同，也请记录警号。这些证据可在未来政府否认通知内容或送达方式时提供关键佐证。如您要求公开程序或补偿信息被拒，务必记录拒绝过程，用于后续上诉。拒绝公开违反了行政行为应有的程序正当性与知情同意原则。</p>

      <li><b>动员邻居：</b>很可能您的邻居也收到相同通知。此时，应在前期接触基础上逐步扩大小组范围。共享信息、整合资源、邀请熟悉法律的人士协助。</li>
      <p>团结行动有助于向政府要求召开听证会、协商会，而非单独接受“个别谈判”，从而被轻易施压或分化。请警惕：当局往往采取“分化瓦解”策略，利用“优先签约奖励”、恐吓未签户、造谣等手段削弱团结。尝试明确共同底线，并达成一致行动的初步承诺。</p>

      <li><b>连结更广的抗争网络：</b>此时，您可能感到孤立无援，尤其是缺乏经验。但请记住：网络审查、舆论封锁、禁语机制，使得彼此难以看到彼此，并不代表“维权者”不存在。</li>
      <p>试着与经验丰富的人建立联系——也许是几年前经历过拆迁的邻居，或者曾经上访、诉讼、信访的人。他们积累的资源与教训极具价值。您也可在网上匿名搜索、发帖求助。如果遭遇屏蔽或删帖，尝试使用隐喻表达或关键词替代。每一次真实连结，都会为您增加一分力量。</p>
    </ul>
    <p>请务必理解：收到正式通知并不代表拆迁马上到来。很多项目被搁置数月甚至数年。行政体系运转迟缓、不完美，而您的法律意识和准备程度，正是让您在谈判中更具优势的保障。此阶段，政府常利用“突然性”与“紧迫感”制造服从氛围。恐吓策略也常从此刻开始——如“为了你好”式劝说，或“再不签就什么都拿不到”的威胁。请保持坚定，明确法律权利：即使拒签补偿协议，政府也不能立即强拆，必须依法进行。话虽如此，非法强拆确实存在，往往发生得突然且伴随暴力。因此，在主张权利的同时，也请做好现实防范：若被通知“谈话”，请提前告知可信亲友；如怀疑拆迁临近，请避免长时间离家。</p>
  </>)
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
    contentCh: (
      <>
        <p><b>情况：</b>在收到征收通知后，通常会进入协商阶段。地方官员或开发商代表会逐户登门“谈条件”，通常包括一笔金钱补偿，以及按现住房面积换算的安置房承诺。但许多居民发现这些初步方案远低于市场价值，忽视生计损失，也无法恢复原有生活水平。有时表面上看起来“挺大方”，但仔细核对条款后，才发现背后暗藏陷阱。</p>
        <p>这一阶段远不只是“谈钱”那么简单，而是一个压力巨大的攻心战阶段，目的是分化居民、制造“自愿签约”的假象。官员常说“邻居都签了，就你没签”来制造孤立感，即使并不属实。要意识到所谓“协商”，其实是对您心理准备、信息储备与组织协调能力的考验。这一阶段可能持续数周甚至数月，一旦大部分人签约搬离，政府或开发商就可能转向更激进手段。</p>
    
        <p><b>建议行动：</b></p>
        <ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
          <li><b>集体协商：</b>尽量避免单独协商，力求集体谈判。通过居民小组或维权代表与村干部集体见面，可以减少被分化施压的风险。提前统一一个基础诉求清单，例如每平方米最低补偿标准、公平的搬迁选项、特殊家庭的照顾安排等。不要以“求情”或“个人例外”的方式表达诉求，而要以“权利主张”提出条件，把谈判重心从“接受方案”转为“共同制定规则”。</li>
    
          <li><b>掌握资产价值：</b>此阶段，您应已收集本地房产市场价格（城市居民）或土地与建筑评估值（农村居民）。如政府或开发商提供的估价明显偏低，请自信指出差异，并引用法律依据或估值报告支撑自己的要求。</li>
          <p>您可以详细准备自己心中的“合理补偿方案”，但切忌轻易透露“底线”，以免对方借机压价。即使对方一时不让步，您表现出的专业程度与识破压价技巧的能力，会使他们知道：您不是容易对付的对象。</p>
    
          <li><b>展示谈判筹码：</b>有效谈判不仅要明确底线，也要善于释放“筹码”。比如：该项目是否真正符合“公共利益”？是否合法完成审批流程？补偿是否存在歧视性或隐蔽性条款？是否使用了威胁、逼签等非法手段？不必直接对抗，但可通过话语暗示：“根据国家政策，商业开发项目通常需要征得居民真实同意……我们也希望事情能圆满解决，而不是日后被上级追责。”这类语气既平和又留有余地，传递出您“愿意谈、也准备斗”的信号。</li>
    
          <li><b>记录全过程：</b>详细记录每一次协商，包括时间、地点、参与人、内容。如条件允许，悄悄录音是非常重要的防护手段。将录音和笔记多重备份，妥善保存。很多承诺，比如“先签了，我们后面给你更大的房子”，若未进入书面协议，之后将无法追责。没有录音，就无法还原被欺骗或威胁的过程。</li>
          <p>可使用小型录音笔、纽扣型设备、针孔摄像头等隐蔽工具进行取证，这些设备在淘宝等平台很容易购买。有些人习惯把手机放在衣兜录音，有些则在包内或衣服缝中嵌入录音器。务必提前测试设备的续航和存储方式，确保遇事能快速取出证据。</p>
          <p>如遇到高风险情境（例如被强行带去“谈话”），可能无法携带录音设备。此时应提前部署：可在家门口或会客区装上隐蔽摄像头，也可拜托邻居一旦发现可疑人员进入或听到动静，及时远程拍摄或报警。集体监督机制可以在关键时刻弥补个人能力的不足。</p>
    
          <li><b>带上帮手：</b>尽量避免独自参加谈判。建议请一位冷静、熟悉情况、与您立场一致的亲属陪同，不仅有助于心理稳定，也能在会后一起复盘、避免遗漏要点。这也是确保家庭内“信息共享、立场一致”的关键一环。</li>
    
          <li><b>保持冷静，切勿暴露底牌：</b>拆迁人员常通过观察您的言行、表情、反应来判断您是否“好对付”。如果您表现出慌张、犹豫或情绪激动，对方很可能会判断您不具备持久抗争能力，从而更轻视您的主张。反之，情绪稳定、逻辑清晰，会让对方意识到：这是一个需要认真对待的对手。</li>
          <p>谈判中若显出焦虑、着急等信号，会被解读为“只差一点就能逼你让步”。请保持语气平和、语速稳定。必要时可沉默几秒再开口，避免被对方牵着节奏走。</p>
          <p>拆迁谈判人员通常接受过操控心理的培训。他们可能先冷后热，或用轻视、挑衅、假装同情等方式撬动您情绪。您一旦情绪化发言（如口头威胁或失控表态），就可能被录音、被反用。请牢记：您不是“闹事者”，而是在正当维护自己的财产与生存权。保持自尊与沉稳，是最有效的防守。</p>
    
          <li><b>必要时延迟签约：</b>很多所谓“签约期限”其实是人为制造的紧迫感。只要您未被强制执行，就无需急于做出决定。可以不断提出疑问、要求解释、申请再次协商等，拉长谈判周期，增加对方的运营成本与心理压力。在很多项目中，开发商和政府才是最怕“拖延”的一方。</li>
          <p>请判断当前局势：其他人是否已妥协？若仅剩少数“钉子户”，您可能面临更高风险。当局常对“最后不签的人”施加重点打击，如日夜骚扰、断水断电、非法拘留甚至暴力拆除。因此延迟策略需慎用、慎守底线。</p>
        </ul>
    
        <p>中国的“谈判式拆迁”本质上是一场高风险博弈。协商阶段是转机与危机并存的窗口期——若能争取到相对公平的方案，往往是现实中最可行的出路；但若补偿明显不公，也绝不能因恐惧而盲目签约。</p>
        <p>最后，请千万不要签署任何您未完全理解或同意的协议。许多居民曾在无意识中签了空白文件，后被填入不平等条款。官方还常故意避开家庭主力维权者，转而找年迈、体弱、不识字或户主之外的成员“单独谈话”，趁其不备骗签协议。务必告知全家人：遇到拆迁人员上门，不要单独应对，一律以“我不清楚”或“我不是决定人”回应，拖延时间，争取协商。若有家庭成员在压力下被迫签字，请立即报警，要求立案并获取书面记录，以便后续主张协议无效。</p>
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
    contentCh: (
      <>
<p><b>情况：</b>协商已陷入僵局，或您拒绝签字、或因胁迫而签署协议但希望反悔。尽管分歧未解，当局可能已发布拆除令或征收决定，甚至已启动强拆行为。这通常是您采取法律行动的触发点。</p>
<p>法律行动不仅仅是“打官司”，更是一种策略，能争取时间、增加谈判筹码、揭示程序违法。虽然法院判决撤销征收极为罕见，但更实际的目标是延缓拆迁、提高不法行为代价、留下抵抗记录。</p>

<ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
  <li><b>行政诉讼：</b>如您收到正式的拆迁或征收决定，可依据《行政诉讼法》起诉发布该决定的政府部门。常见理由包括无公共利益依据、程序不符、补偿不公、滥用权力等。虽胜诉率不高（约10%以下），但仅提交诉讼就可能阻止强拆并促成谈判。</li>
  <li><b>行政复议：</b>这是比诉讼更快捷、更低成本的路径，可作为先行步骤。您可向上一级政府申请复查原决定。例如县政府发文，可向市或省政府申请复议。虽多数结果走过场，但部分案件在程序明显违法、或引发舆论关注下可能被驳回。</li>
  <li><b>民事诉讼：</b>如您在拆迁中遭遇暴力、威胁、财产损害，可起诉施工单位或相关责任人。此类诉讼不涉及行政行为，法院更可能受理。若签约过程存在胁迫、欺诈，也可提起撤销合同之诉。</li>
  <li><b>宪法与监督路径：</b>虽中国无法直接以宪法起诉，但您可在法庭文书中引用《物权法》《宪法修正案》等原则增强合法性。此外，可向人大、纪委等机关举报地方腐败或程序违法，虽成效不明，但有时能引起上级关注。</li>
  <li><b>信访并行：</b>可同时向信访部门提交材料，寄送至省信访办、北京国家信访局，增加政治压力。即便结果不明确，地方官员通常惧怕上级介入。请注意信访有被报复风险，应评估风险后决定。</li>
</ul>

<p><b>建议行动：</b></p>
<ul style={{ paddingLeft: "30px", textAlign: "left", marginTop: "0" }}>
  <li><b>构建强有力的证据档案：</b>收集所有资料：房产证、录像、照片、公告、谈话记录、医检、警方记录等。务必备份，存于安全位置。</li>
  <li><b>聚焦核心违法点：</b>请勿事无巨细，而应聚焦1-2个重大问题，如“无公共利益依据”、“程序缺失”、“无补偿说明”等，法院更易接受程序性理由。</li>
  <li><b>联合其他受害者：</b>如有多户居民被影响，可参考彼此案例，甚至同步起诉，形成社会影响，法院通常更重视集体案件。</li>
  <li><b>选择合适法院：</b>避免在与政府关系密切的基层法院起诉。如遇拒收、拖延，可上诉或向上级法院监督部门投诉。省会、直辖市法院独立性略强。</li>
  <li><b>律师或公民代理人：</b>如无法请律师，可联系法律援助组织或“老维权户”作为代理人。他们虽非正式执业，但经验丰富，可提供实务支持。</li>
</ul>

<p>在中国语境下，法律维权确实充满困难。法院可能不立案、程序被故意拖延，甚至判决荒唐。但为什么还要走这条路？因为它有三大意义：(1) 拖延时间争取变量变化；(2) 增强谈判筹码；(3) 留下正式的抵抗记录，既是对他人的警示，也是对自己“尽力而为”的交代。</p>

<p>少数案件的确取得胜利，如法院责令增加补偿或终止程序。即使仅达成庭外调解，也是一种务实进展。切勿对法院抱有幻想，但也不应完全放弃。若获得部分或象征性胜诉，请积极传播，防止政府无视判决。曝光就是保护。</p>

<p>请记住，法律行动不是终点，而是抗争工具之一。许多成果源于法院之外的压力和协商。用它争取时间、展示立场、改写力量平衡，并始终保持开放态度，寻找最佳的现实出路。</p>
      </>
    ),    
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
