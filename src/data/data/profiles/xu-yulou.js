import { parseParagraphs } from '../../../utils/parseParagraphs';

const englishText = `
My name is Xu Yulou, my property was located in Shaozaidi #15, Xiao Lou Alley, Liangxi District, Wuxi, Jiangsu. When my grandfather passed away in the early 2000s, my elderly grandmother moved in with my father - but his apartment was too small, confining her to a tiny living room that made daily life a constant struggle. The need for expansion became impossible to ignore. At that time, housing prices - especially in the city center - were climbing steadily, putting most properties well beyond our means. My grandmother needed to be near the church in the city center for her weekly worship, so we turned our attention to the private houses of the old quarter. These homes offered a practical advantage over commercial condos: without the burden of shared public spaces, a 100-square-meter private house could accommodate four rooms where a commercial condo of the same size would only provide three. Better still, these private houses often came with their own courtyards, terraces, and rooftops, offering both abundant sunlight and precious quiet amid the city's bustle - features highly desired by my family.

Despite the pressing objective need, my father maintained a passive attitude toward purchasing a house. He believed that given his advanced age, he would only live in it for a few years before passing away, and thus was unwilling to contribute money or effort. He preferred to “play with” his money rather than locking most of it away in real estate. And so the burden of buying a house fell on me, a newlywed still finding my financial footing.

At the time, my husband and I were not financially well-off. Almost all our savings from before our marriage, along with our wedding gifts and red packets, had gone to settle debts: my in-laws had emptied their life savings and borrowed heavily to build a house in their village in our hometown’s peri-urban area, which later also faced forced demolition. For two years after our marriage, we saved every yuan possible. While pregnant with my daughter, I dabbled in the stock market, making some money through getting in on new stock offerings. We also withdrew over ¥70,000 from our Housing Provident Funds. We eventually scraped together ¥120,000, which was no small feat considering our monthly salary was only around ¥800 each, with year-end bonuses bringing our annual income to barely ¥10,000. But we gritted our teeth and made it happen.

The early 2000s saw a huge surge in commercial housing purchases. Every young couple seemed to be buying new homes; our colleagues at the hospital were moving into their own places, some even acquiring luxury villas by Taihu Lake. This trend made me feel both pressured and envious, strengthening my determination to buy a house for my family as well. Initially, I looked at available properties near Wuxi Normal University's Affiliated Elementary School but found them too cramped. Later, I felt that Chongning Road Elementary School offered better education than our district’s schools in Beitang District. I hoped to transfer my daughter's household registration to Chong'an District so she can enroll in Chongning Road Elementary. At the time, I thought this would be our ceiling - I never imagined my daughter would qualify for the private and selective Jinqiao Elementary School, let alone that we could afford the ¥5000/semester tuition.
`;

const chineseText = `
我叫徐欲楼，我的房产位于江苏省无锡市梁溪区小娄巷少宰第15号。2000年代初，我的爷爷去世，年迈的奶奶不得不搬去与我父亲同住。但是我父亲家里的住房面积过于狭小，奶奶只能蜗居在一个逼仄的小客厅，日常生活极为不便，因此购房的需求愈发迫切。当时，市中心房价持续攀升，绝大多数商品房远超我们的承受能力。然而，奶奶需要靠近市中心的教堂以便每周礼拜，我们决定将目光转向市中心的私房。私房相较于商品房有明显优势：没有公摊面积，一套一百平方米的私房可以划分出四个房间，而同样面积的商品房往往只能提供三间。此外，私房大多为独门独院，配备庭院、露台和天台，在喧嚣的城市中提供充足阳光与一方静谧，正合我家心意。

尽管客观需求迫切，我父亲对购房一事却始终持消极态度。他认为自己年事已高，买房也住不了几年，因此既不愿出钱，也不愿费心。他本人的性格更倾向于“玩钱”，而不是掏出大部分的存款买不动产。在这样的背景下，买房的重担落到了刚刚结婚不久的我身上。

当时，我与丈夫的经济状况并不宽裕。婚前，我们的彩礼、见面礼等积蓄几乎全都用来偿还债务——我的公婆曾倾尽毕生积蓄在无锡的城乡结合部造私房，借了不少钱，那座房子后来也遭遇了强拆。婚后，我和我丈夫攒了两年多的钱，包括我怀孕的时候通过买新股赚的钱和提取的公积金7万多，最终凑到近12万。这在当时实属不易，毕竟我们两人的月薪仅800元出头，即便算上年终奖，年收入也不过一万元左右。但我们咬紧牙关筹措资金。

2000年代初，社会风气逐渐推动了商品房的流行。当时夫妻结婚几乎都会买新房，我们在医院里的同事也纷纷搬进新居，有些甚至在太湖边购置了别墅。这一趋势让我既感压力，又生羡慕，更加坚定了买房的决心。最初，我想买无锡师范附属小学的学区房，但因房子面积太小而作罢。后来，我觉得崇宁路小学的教育资源优于我们原本所在的北塘区，于是希望将女儿的户口迁至崇安区，让她能就读崇宁路小学。当时觉得通过学区上公办的崇宁路小学就很好了，万万没想到女儿后来能考入私立的金桥小学，也没想到我们能负担得起每学期五千元的学费。
`;

const parsedEnglish = parseParagraphs(englishText, 'en');
const parsedChinese = parseParagraphs(chineseText, 'ch');

// Optionally, add footnote IDs to a few paragraphs for testing:
if (parsedEnglish.length > 0) parsedEnglish[0].footnoteId = "1";
if (parsedEnglish.length > 1) parsedEnglish[1].footnoteId = "2";
if (parsedEnglish.length > 2) parsedEnglish[2].footnoteId = "3";

if (parsedChinese.length > 0) parsedChinese[0].footnoteId = "1";
if (parsedChinese.length > 1) parsedChinese[1].footnoteId = "2";
if (parsedChinese.length > 2) parsedChinese[2].footnoteId = "3";

export const xuYulouData = {
    id: "xu-yulou",
    name: "Xu Yulou",
    chName: '徐欲楼',
    address: "Shaozaidi #15, Xiao Lou Alley, Liangxi District, Wuxi, Jiangsu, China",
    chineseAddress: "江苏省无锡市梁溪区小娄巷少宰第15号",
    location: { lat: 31.575074160132235, lng: 120.3053892191866 },
    cover:
      "https://res.cloudinary.com/pang-dev/image/upload/v1677709248/CCLT/Jianhua_Tang_garden_k2npqh.jpg",
//    audio: [
//      {
//        name: "Audio clip 1",
//        src: "https://res.cloudinary.com/pang-dev/video/upload/v1677709255/CCLT/donggua.mp3",
//      },
//    ],
    images: [
      {
        mediaType: 'image',
        link: "https://res.cloudinary.com/dmi3ywlal/image/upload/v1717769294/Jianhua_Tang_garden_p53zqs.jpg",
        caption:
          "Former resident Jianhua Tang in her backyard garden on Johnny Court. (CPA photo by Kye Liang)",
        chCaption:
          "前居民湯建華在約翰尼庭院後院她的菜園中。（攝影：Kye Liang，華人前進會）",
      },
      {
        mediaType: 'pdf',
        link:"https://res.cloudinary.com/dsqszwws8/image/upload/v1741125845/Yu_Xiulan_collective_land_use_certificate_%E9%83%81%E7%A7%80%E5%85%B0_%E9%9B%86%E4%BD%93%E5%9C%9F%E5%9C%B0%E4%BD%BF%E7%94%A8%E8%AF%81_vyqxdd.pdf",
        caption: "Collective land use certificate, Yu Xiulan",
        chCaption: "集体土地使用证，郁秀兰",
      }
    ],
  // Combine the paragraphs into one description array
  description: [
    ...parsedEnglish,
    ...parsedChinese,
  ],

    footnotes: [
      { id: "1", en: "",
                 ch: "",},
    ],

    tags: [
        { en: "Forced Demolition", ch: "强制拆迁" },
        { en: "Intimidation", ch: "恐吓" },
        { en: "Physical Harm", ch: "人身伤害" },
      ],
  };
