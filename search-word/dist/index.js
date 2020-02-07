"use strict";
// import * as _ from 'lodash';
var WordSearch = /** @class */ (function () {
    function WordSearch() {
        this.map = {};
    }
    // add a word to the structure
    WordSearch.prototype.addWord = function (word) {
        this.map[word] = true;
        var list = [word];
        for (var i = 0; i < word.length; i = i + 1) {
            var curentWords = list.length;
            for (var j = 0; j < curentWords; j = j + 1) {
                var tmpWord = list[j];
                tmpWord = tmpWord.slice(0, i) + "." + tmpWord.slice(i + 1, tmpWord.length);
                list.push(tmpWord);
                this.map[tmpWord] = true;
            }
        }
    };
    // search a word in the structuure
    WordSearch.prototype.search = function (word) {
        return this.map[word];
    };
    return WordSearch;
}());
var searcher = new WordSearch();
searcher.addWord('bad');
// searcher.addWord('dad');
// searcher.addWord('mad');
//# sourceMappingURL=index.js.map