// import * as _ from 'lodash';

export class WordSearch {
  private map: { [key: string]: boolean };

  constructor() {
    this.map = {};
  }

  // add a word to the structure
  public addWord(word: string): void {
    this.map[word] = true;

    const list = [word];
    for (let i = 0; i < word.length; i = i + 1) {
      const curentWords = list.length;
      for (let j = 0; j < curentWords; j = j + 1) {
        let tmpWord = list[j];
        tmpWord = `${tmpWord.slice(0, i)}.${tmpWord.slice(i + 1, tmpWord.length)}`;
        list.push(tmpWord);
        this.map[tmpWord] = true;
      }
    }
  }

  // search a word in the structuure
  public search(word: string): boolean {
    return !!this.map[word];
  }
}
