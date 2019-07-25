// complimentary-colors.js
const base = 255;

function _convert (rgb) {
  let hx = Number(rgb).toString(16);
  if (hx.length < 2) {
    hx = "0" + hx;
  }
  return hx;
}

/**
 * @function rgb
 * @arguments { r, g, b } Numbers
 * @return { color, compliment }
**/
function rgb (r, g, b) {
  let cr = base - r;
  let cg = base - g;
  let cb = base - b;
  let color = "#" + _convert(r) + _convert(g) + _convert(b);
  return {
    color,
    compliment: (
      "#"+ _convert(cr) + _convert(cg) + _convert(cb)
    )
  };
}

module.exports = rgb;
