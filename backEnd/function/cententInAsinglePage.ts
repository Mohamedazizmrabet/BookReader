export const main = (array: string[], phrasesInASinglePage: number) => {
  const result: any[] = [];
  for (let i = 0; i < array.length; i += phrasesInASinglePage) {
    result.push(array.slice(i, i + phrasesInASinglePage));
  }
  return result;
};
