function rand(max) {
  return Math.random() * max;
}

class Star {
  constructor(canvas, wrapper, size, speed) {
    this.ctx = canvas.getContext("2d");
    this.wrapper = wrapper;
    this.size = size;
    this.speed = speed;
    this.x = rand(window.innerWidth);
    this.y = rand(this.wrapper.clientHeight);
  }

  animate(delta) {
    this.x += this.speed * delta;
    this.y -= this.speed * delta;
    if (this.y < -10) {
      this.y = this.wrapper.clientHeight;
    }
    if (this.x > window.innerWidth) {
      this.x = 0;
    }
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  };
}

export default class {
  constructor(canvas, wrapper) {
    this.canvas = canvas;
    this.wrapper = wrapper;
    this.ms = 16;
    this.stars = [];
    this.initializeBackground();
    this.initializeStars();

  }

  initializeBackground() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = this.wrapper.clientHeight;
    this.fadeIn(this.canvas, 500);
    window.addEventListener("resize", () => this.resize());
    window.requestAnimationFrame(() => this.paintLoop());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = this.wrapper.clientHeight;
    this.fadeIn(this.canvas, 500);
    this.initializeStars();
  }

  initializeStars() {
    const winArea = window.innerWidth * this.wrapper.clientHeight;
    const smallStarsDensity = 0.0001;
    const mediumStarsDensity = 0.00005;
    const largeStarsDensity = 0.00002;
    const smallStarsCount = winArea * smallStarsDensity;
    const mediumStarsCount = winArea * mediumStarsDensity;
    const largeStarsCount = winArea * largeStarsDensity;
    for (let i = 0; i < smallStarsCount; i++) {
      this.stars.push(new Star(this.canvas, this.wrapper, 1, 30));
    }

    for (let i = 0; i < mediumStarsCount; i++) {
      this.stars.push(new Star(this.canvas, this.wrapper, 2, 20));
    }

    for (let i = 0; i < largeStarsCount; i++) {
      this.stars.push(new Star(this.canvas, this.wrapper, 3, 10));
    }
  }

  drawStars(delta) {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].animate(delta);
    }
  }

  paintLoop() {
    // console.log(this.canvas.getContext("2d"));
    this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
    let delta = this.ms / 1000;
    this.drawStars(delta);
    window.requestAnimationFrame(() => this.paintLoop());
  }

  fadeIn(element, duration, callback) {
    element.style.opacity = 0;
    element.style.display = "block";

    const startTime = Date.now();
    let tick = () => {
      let newOpacity = (Date.now() - startTime) / duration;
      if (newOpacity > 1) {
        newOpacity = 1;
        callback && callback();
      } else {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
      }

      element.style.opacity = newOpacity;
    };
    tick();
  }

}