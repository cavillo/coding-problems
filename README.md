# JavaScript Technical Interview Questions


## Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

**Example**
Given `n = 5`, and `version = 4` is the first bad version.
```
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
```
Then `4` is the first bad version.

## Search Word

Design a data structure that supports the following two operations:

```
void addWord(word)
bool search(word)
```
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

**Example:**
```
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```

**Note:**
You may assume that all words are consist of lowercase letters a-z.

## Islands

Given a 2d grid map of `1`s *land* and `0`s *water*, count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**
```
Input:
11110
11010
11000
00000
Output: 1
```
**Example 2:**

```
Input:
11000
11000
00100
00011
Output: 3
```

## Parenthesis

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

**Note:** The input string may contain letters other than the parentheses ( and ).

**Example 1:**
```
Input: "()())()"
Output: ["()()()", "(())()"]
```

**Example 2:**
```
Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
```
**Example 3:**
```
Input: ")("
Output: [""]
```

## Sort Colors
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note:**
You are not suppose to use the library's sort function for this problem.

**Example:**
```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Follow up:**
- A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?
