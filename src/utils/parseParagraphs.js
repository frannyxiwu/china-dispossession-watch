// src/utils/parseParagraphs.js
export function parseParagraphs(text, type) {
    return text
      // Split on blank lines; tweak as needed
      .split(/\n\s*\n/)
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0)
      .map(paragraph => ({
        type,
        default: paragraph,
      }));
  }
  
  