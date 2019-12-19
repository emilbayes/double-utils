# `double-utils`

> Utilities for decomposing doubles (Number) and pretty printing

## Usage

```js
var doubleUtils = require('double-utils')

console.log(doubleUtils.sign(Math.PI))
console.log(doubleUtils.exp(Math.PI))
console.log(doubleUtils.frac(Math.PI))

// OR
console.log(doubleUtils.decompose(Math.PI))

console.log(doubleUtils.format(Math.PI))
```

## API

### `const n = doubleUtils.sign(double)`

Returns the sign bit. `0` is positive, `1` is negative

### `const exp = doubleUtils.exp(double)`

Returns the exponent part, which is a number between `[0, 2048)`

### `const frac = doubleUtils.frac(double)`

Returns the fractional (or mantissa) part, which is a 52-bit number

### `const [sign, exp, frac] = doubleUtils.decompose(double)`

Run the above three methods at once

### `const str = doubleUtils.format(double, guide = true)`

Print the number as a bit string, with an optional guide.

## Install

```sh
npm install double-utils
```

## License

[ISC](LICENSE)
