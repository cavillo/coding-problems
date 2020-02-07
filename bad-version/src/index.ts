import * as _ from 'lodash';

const isBadVersion = (versionMap: boolean[], version: number): boolean => {
  if (version < 1) throw Error('Invalid version');
  if (version > versionMap.length) throw Error('Invalid version');

  return versionMap[version - 1];
};

export const findFirstBadVersion = (versionMap: boolean[]): number => {
  if (_.isNil(versionMap)) throw Error('Invalid "versionMap"');
  if (_.isEmpty(versionMap)) throw Error('Invalid "versionMap"');

  const n = versionMap.length;

  const minVersion = 1;
  const maxVersion = n;

  const binarySearch = (min: number, max: number): number => {
    if (max - min < 2) return min;

    const version = Math.floor((max - min) / 2) + min;
    const isBad = isBadVersion(versionMap, version);

    if (isBad) {
      return binarySearch(min, version);
    }
    return binarySearch(version, max);
  };

  return binarySearch(minVersion, maxVersion);
};

const versionMap = [false, false, false, false, true, true, true];
const version = findFirstBadVersion(versionMap);
