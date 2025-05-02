function isPrefixOfWord(sentence: string, searchWord: string): number {
  for (
    let sentenceIndex = 0, wordCount = 0, searchWordIndex = 0;
    sentenceIndex < sentence.length;
    ++sentenceIndex
  ) {
    if (sentence[sentenceIndex] === " ") {
      ++wordCount;
      ++sentenceIndex;
      searchWordIndex = 0;
    }

    if (
      sentence[sentenceIndex] === searchWord[searchWordIndex] &&
      searchWordIndex !== -1
    ) {
      if (searchWordIndex >= searchWord.length - 1) return ++wordCount;
      ++searchWordIndex;
    } else searchWordIndex = -1;
  }

  return -1;
}

