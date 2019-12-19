const write = new Uint8Array(8)
const read = new Float64Array(write.buffer)

const guideStr = '\ns' + '⎣ exponent⎦' + '⎣                    fraction                      ⎦'
function format (double, guide = true) {
  read[0] = double

  const bits = byte(write[7]) +
    byte(write[6]) +
    byte(write[5]) +
    byte(write[4]) +
    byte(write[3]) +
    byte(write[2]) +
    byte(write[1]) +
    byte(write[0])

  return bits + (guide ? guideStr : '')
}

function sign (double) {
  read[0] = double
  return (write[7] >>> 7) & 0b1
}

function exp (double) {
  read[0] = double
  return (write[7] & 0b01111111) << 4 | (write[6] & 0b11110000) >>> 4
}

function frac (double) {
  read[0] = double

  return (
    (write[0] | write[1] << 8 | write[2] << 16 | write[3] << 24) +
    (write[4] | write[5] << 8 | (write[6] & 0b00001111) << 16) * 0x100000000
  )
}

function byte (b) {
  return b.toString(2).padStart(8, '0')
}

function decompose (double) {
  return [sign(double), exp(double), frac(double)]
}

module.exports = {
  format,
  sign,
  exp,
  frac,
  decompose
}
