# is-webp-extended

[![workflow](https://github.com/mooyoul/is-webp-extended/actions/workflows/main.yml/badge.svg)](https://github.com/mooyoul/is-webp-extended/actions/workflows/main.yml)
[![Semantic Release enabled](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/is-webp-extended.svg)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](http://mooyoul.mit-license.org/)

Extended version of [sindresorhus/is-webp](https://github.com/sindresorhus/is-webp), which added Animated WebP detection support.
also it does not have any dependency. so tiny!

It takes `File` or `ArrayBuffer` and checks given file is WebP, or Animated WebP.
If `File` is provided, package automatically handles additional requirements like seeking, buffering... 

## Sponsor

- [CATCH](https://www.catchfashion.com/) - 캐치패션 - 세상 쉬운 명품 직구 - [We're hiring!](https://www.wanted.co.kr/company/2378)

## Demo

https://mooyoul.github.com/is-webp-extended/

## Install

#### from NPM

```bash
$ npm install is-webp-extended --save

```


#### from unpkg

```html
<script src="https://unpkg.com/is-webp-extended" type="text/javascript" ></script>
```
 
 
## Supported WebP Formats

- Simple File Format (Lossy)
- Simple File Format (Lossless)
- Extended File Format (e.g. Animated WebP)
    
 
## API

### `isWebP(input: ArrayBuffer | File)` => `Promise<boolean>`

returns given input is WebP or not

### `isAnimatedWebP(input: ArrayBuffer | File)` => `Promise<boolean>`

returns given input is Animated WebP or not


## Changelog

See [CHANGELOG](/CHANGELOG.md).


## Testing

```bash
$ npm run test
```


## Build

```bash
$ npm run build
```

## Related

- [sindresorhus/is-webp](https://github.com/sindresorhus/is-webp) - Check if a Buffer/Uint8Array is a WebP image
- [mooyoul/node-webpinfo](https://github.com/mooyoul/node-webpinfo) - Strongly typed, Stream based WebP Container Parser

## License
[MIT](LICENSE)

See full license on [mooyoul.mit-license.org](http://mooyoul.mit-license.org/)
