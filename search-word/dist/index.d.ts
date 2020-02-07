declare class WordSearch {
    private map;
    constructor();
    addWord(word: string): void;
    search(word: string): boolean;
}
declare const searcher: WordSearch;
