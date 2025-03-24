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

export const wangMeiyuData = {
    id: "wang-meiyu",
    name: "Wang Meiyu",
    chName: '王美珏',
    address: "Liangxi District, Wuxi, Jiangsu, China",
    chineseAddress: "江苏省无锡市梁溪区尤渡村",
    location: { lat: 31.585676377664377, lng: 120.33485743519225 },

    images: [
      {
        mediaType: 'image',
        link: "",
        caption:
          "",
        chCaption:
          "",
      },
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
        { en: "Illegal Detention", ch: "非法拘禁" },
        { en: "Coercion", ch: "胁迫" },
        { en: "Intimidation", ch: "恐吓" },
        { en: "Physical Harm", ch: "人身伤害" },
        { en: "Forced Signing", ch: "强迫签字" },
        { en: "Surveillance", ch: "监视" },
        { en: "Near-death Experience", ch: "濒死经历"}
      ],
  };
