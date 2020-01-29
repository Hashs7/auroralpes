/**
 * @param ctx
 * @param rect
 * @param radius
 * @param fill
 * @param stroke
 */
export const roundRect = (ctx, rect, radius = 5, fill, stroke) => {
  const { x, y, width, height } = rect;
  const radiusObj = {
    tl: radius,
    tr: radius,
    br: radius,
    bl: radius,
  };

  ctx.beginPath();
  ctx.moveTo(x + radiusObj.tl, y);
  ctx.lineTo(x + width - radiusObj.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radiusObj.tr);
  ctx.lineTo(x + width, y + height - radiusObj.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radiusObj.br, y + height);
  ctx.lineTo(x + radiusObj.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radiusObj.bl);
  ctx.lineTo(x, y + radiusObj.tl);
  ctx.quadraticCurveTo(x, y, x + radiusObj.tl, y);
  ctx.closePath();
  ctx.clip();

  if (fill && fill.length) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke && stroke.length) {
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
};

/**
 * @param fn
 * @param delay
 * @returns {Function}
 */
export const debounce = (fn, delay = 250) => {
  let timeout;
  return (...args) => {
    const functionCall = () => fn.call(this, ...args);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, delay);
  };
};

/**
 * @param start
 * @param end
 * @returns {*}
 */
export const randomBetween = (start, end) => (
  Math.floor(Math.random() * (end - start + 1)) + start
);

export const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 *
 * @param t: elaspedTime in milliseconds
 * @param b: startValue
 * @param c: endValue
 * @param d: totalDuration
 * @returns {*}
 */
export const easeInOutQuad = (t, b, c, d)  => {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
};
