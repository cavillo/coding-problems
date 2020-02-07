"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var isValid = function (s) {
    var valid = 0;
    for (var i = 0; i < s.length; i = i + 1) {
        var char = s.charAt(i);
        if (char === '(')
            valid = valid + 1;
        if (char === ')')
            valid = valid - 1;
        if (valid < 0)
            return false;
    }
    return valid === 0;
};
var removeCharAt = function (s, index) {
    if (index < 0)
        throw Error('Invalid "index"');
    if (index >= s.length)
        throw Error('Invalid "index"');
    var i = Math.floor(index);
    return "" + s.slice(0, i) + s.slice(i + 1, s.length);
};
var getValidOptions = function (word) {
    var result = [];
    for (var i = 0; i < word.length; i = i + 1) {
        var char = word.charAt(i);
        if (['(', ')'].indexOf(char) < 0)
            continue;
        var tmp = removeCharAt(word, i);
        result.push(tmp);
    }
    return result;
};
var removeParenthesis = function (s) {
    if (isValid(s))
        return [s];
    var result = {};
    var options = [s];
    for (var i = 0; i < s.length; i = i + 1) {
        var option = options.shift();
        var char = s.charAt(i);
        if (['(', ')'].indexOf(char) < 0)
            continue;
        var tmp = removeCharAt(s, i);
        if (_.has(result, tmp))
            continue;
        if (isValid(tmp)) {
            result[tmp] = true;
        }
    }
    return _.keys(result);
};
exports.removeParenthesis = removeParenthesis;
var removeParenthesis2 = function (s) {
    if (isValid(s))
        return [s];
    var visited = {};
    var result = [];
    var options = [s];
    while (options.length > 0) {
        var option = options.shift();
        if (!option)
            continue;
        if (result.length > 0 // a result was found
            && result[0].length > (option.length - 1) // the following posible results are smaller
        )
            return result;
        for (var i = 0; i < s.length; i = i + 1) {
            var char = option.charAt(i);
            if (['(', ')'].indexOf(char) < 0)
                continue;
            var tmp = removeCharAt(s, i);
            if (_.has(visited, tmp))
                continue;
            visited[tmp] = true;
            options.push(tmp);
            if (isValid(tmp)) {
                result.push(tmp);
            }
        }
    }
    return result;
};
exports.removeParenthesis2 = removeParenthesis2;
var s = '(()))(';
var result = removeParenthesis2(s);
//# sourceMappingURL=index.js.map