# is-webp-extended

[![Build Status](https://travis-ci.org/mooyoul/node-webpinfo.svg?branch=master)](https://travis-ci.org/mooyoul/is-webp-extended)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/is-webp-extended.svg)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](http://mooyoul.mit-license.org/)

Extended version of [sindresorhus/is-webp](https://github.com/sindresorhus/is-webp), which added Animated WebP detection support.
also it does not have any dependency. so tiny!

It takes `File` or `ArrayBuffer` and checks given file is WebP, or Animated WebP.
If `File` is provided, package automatically handles additional requirements like seeking, buffering... 

## Sponsor

- [Vingle](https://www.vingle.net) - Vingle, Very Community. Love the things that you love. - [We're hiring!](https://careers.vingle.net/#/engineering/backend)

## Demo

https://mooyoul.github.com/is-webp-extended/

## Install

#### from NPM

```bash
$ npm install is-webp-info

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

returns given input is WebP or not


## Changelog

#### 1.0.0

- Initial Release


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


## License
[MIT](LICENSE)

See full license on [mooyoul.mit-license.org](http://mooyoul.mit-license.org/)