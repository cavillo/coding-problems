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
var isBadVersion = function (versionMap, version) {
    if (version < 1)
        throw Error('Invalid version');
    if (version > versionMap.length)
        throw Error('Invalid version');
    return versionMap[version - 1];
};
exports.findFirstBadVersion = function (versionMap) {
    if (_.isNil(versionMap))
        throw Error('Invalid "versionMap"');
    if (_.isEmpty(versionMap))
        throw Error('Invalid "versionMap"');
    var n = versionMap.length;
    var minVersion = 1;
    var maxVersion = n;
    var binarySearch = function (min, max) {
        if (max - min < 2)
            return min;
        var version = Math.floor((max - min) / 2) + min;
        var isBad = isBadVersion(versionMap, version);
        if (isBad) {
            return binarySearch(min, version);
        }
        return binarySearch(version, max);
    };
    return binarySearch(minVersion, maxVersion);
};
var versionMap = [false, false, false, false, true, true, true];
var version = exports.findFirstBadVersion(versionMap);
//# sourceMappingURL=index.js.map