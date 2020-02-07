"use strict";
// import * as _ from 'lodash';
var countIslands = function (grid) {
    var num = 0;
    var visited = {};
    var explore = function (i, j) {
        if (i < 0)
            return 0;
        if (i > grid.length)
            return 0;
        if (j < 0)
            return 0;
        if (j > grid[0].length)
            return 0;
        if (visited[i + ":" + j])
            return 0;
        if (grid[i][j] === 0)
            return 0;
        visited[i + ":" + j] = true;
        explore(i - 1, j);
        explore(i + 1, j);
        explore(i, j - 1);
        explore(i, j + 1);
        return 1 + explore(i - 1, j) + explore(i + 1, j) + explore(i, j - 1) + explore(i, j + 1);
    };
    for (var i = 0; i < grid.length; i = i + 1) {
        for (var j = 0; j < grid.length; j = j + 1) {
            var element = grid[i][j];
            if (element === 1 && !visited[i + ":" + j]) {
                if (explore(i, j) > 0)
                    num = num + 1;
            }
        }
    }
    return num;
};
var grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
console.log('result 1', countIslands(grid));
var grid2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
];
console.log('result 2', countIslands(grid2));
//# sourceMappingURL=index.js.map