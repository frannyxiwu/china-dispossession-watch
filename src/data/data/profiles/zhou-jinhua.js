import { parseParagraphs } from '../../../utils/parseParagraphs';

const englishText = ``;

const chineseText = ``;

const parsedEnglish = parseParagraphs(englishText, 'en');
const parsedChinese = parseParagraphs(chineseText, 'ch');

// Optionally, add footnote IDs to a few paragraphs for testing:
if (parsedEnglish.length > 0) parsedEnglish[0].footnoteId = "1";
if (parsedEnglish.length > 1) parsedEnglish[1].footnoteId = "2";
if (parsedEnglish.length > 2) parsedEnglish[2].footnoteId = "3";

if (parsedChinese.length > 0) parsedChinese[0].footnoteId = "1";
if (parsedChinese.length > 1) parsedChinese[1].footnoteId = "2";
if (parsedChinese.length > 2) parsedChinese[2].footnoteId = "3";

export const zhouJinhuaData = {
    id: "zhou-jinhua",
    name: "Zhou Jinhua",
    chName: '周金华',
    address: "",
    chineseAddress: "",
    location: { lat: 31.490333694046846, lng: 120.28699480999114 },
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
      { id: "2", en: "",
                 ch: "",},
      { id: "3", en: "",
                 ch: "",},
      { id: "4", en: "",
                 ch: "",},
      { id: "5", en: "",
                 ch: "",},
      { id: "6", en: "",
                 ch: "",},
      { id: "7", en: "",
                 ch: "",},
      { id: "8", en: "",
                 ch: "",},
      { id: "9", en: "",
                 ch: "",},
      { id: "10", en: "",
                 ch: "",},
    ],

    tags: [
        { en: "Forced Demolition", ch: "强制拆迁" },
        { en: "Intimidation", ch: "恐吓" },
        { en: "Physical Harm", ch: "人身伤害" },
      ],
  };
