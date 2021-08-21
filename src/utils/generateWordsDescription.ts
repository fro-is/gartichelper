export default function generateWordsDescription(words: string[]): string {
  const wordsArray = words.slice(0, 10);
  const wordsArrayWithLength = wordsArray.map(
    word => `(${word.length}) ${word} `
  );
  const description = wordsArrayWithLength.join(" ");

  return description;
}
