# numlike-sort
> Sort for numeric.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/numlike-sort
```

## usage
```js
import numlikeSort from '@jswork/numlike-sort';

// string of numbers:
numlikeSort(['1','3','2']);  // ['1','2','3']

// string of numbers with prefix:
numlikeSort(['a1','a3','a2']);  // ['a1','a2','a3']

// string of numbers with suffix:
numlikeSort(['1a','3a','2a']);  // ['1a','2a','3a']

// string of numbers with prefix and suffix:
numlikeSort(['a1a','a3a','a2a']);  // ['a1a','a2a','a3a']

// custome iterator:
numlikeSort(['pic1-2','pic1-3','pic1-1'], (item) => item.split('-')[1]);  // ['pic1-1','pic1-2','pic1-3']
```

## license
Code released under [the MIT license](https://github.com/afeiship/numlike-sort/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/numlike-sort
[version-url]: https://npmjs.org/package/@jswork/numlike-sort

[license-image]: https://img.shields.io/npm/l/@jswork/numlike-sort
[license-url]: https://github.com/afeiship/numlike-sort/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/numlike-sort
[size-url]: https://github.com/afeiship/numlike-sort/blob/master/dist/numlike-sort.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/numlike-sort
[download-url]: https://www.npmjs.com/package/@jswork/numlike-sort
