
const greenDot =
'<svg viewBox="0 0 12 12"> <path class="greenDot" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

const blueDot =
'<svg viewBox="0 0 12 12"> <path class="blueDot" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

const yellowDot =
'<svg viewBox="0 0 12 12"> <path class="yellowDot" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

const redDot =
'<svg viewBox="0 0 12 12"> <path class="redDot" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

const grayDot =
'<svg viewBox="0 0 12 12"> <path class="grayDot" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

const purpleDot =
'<svg viewBox="0 0 12 12"> <path class="purpleDot" d="M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "/> </svg>';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Particle {
  constructor(svg, coordinates, friction) {
    this.a = [0.5, 1, 2, 0.3, 3][Math.floor(Math.random() * 4)];
    this.svg = svg;
    this.steps = $(window).width() / 8;
    this.item = null;
    this.coordinates = coordinates;
    this.position = this.coordinates.y;
    this.dimensions = this.render();
    this.rotation = Math.random() > 0.5 ? "-" : "+";
    this.scale = 0.5 + Math.random();
    this.siner = 100 * Math.random();

    this.speed = friction;
    this.angle = 0;
    this.bounding = {
      x: $(window).width(),
      y: $(window).height() };


    this.move();
  }
  destroy() {
    this.item.remove();
  }

  move() {
    let x = this.angle;
    let y = this.siner + this.a * Math.sin(this.angle / this.steps) * 40;

    this.item.css({
      transform:
      "translateX(" + (
      -60 + x) +
      "px) translateY(" +
      y +
      "px) scale(" +
      this.scale +
      ") rotate(" +
      this.rotation +
      x +
      "deg)" });


    this.angle = eval(this.angle + this.speed);

    if (-60 + x > this.bounding.x) {
      this.destroy();
      return false;
    } else {
      return true;
    }
    // requestAnimationFrame(this.move.bind(this))
  }

  render() {
    this.item = $(this.svg, {
      css: {
        transform:
        "translateX(" +
        this.coordinates.x +
        "px) translateY(" +
        this.coordinates.y +
        "px)" } });


    $("body").append(this.item);
    return {
      width: this.item.width(),
      height: this.item.height() };

  }}


// const data = [purpleDot, grayDot, greenDot, blueDot, redDot, yellowDot];

let isPaused = false;
window.onblur = function () {
  isPaused = true;
}.bind(this);
window.onfocus = function () {
  isPaused = false;
}.bind(this);

//----------

let particles = [];

setInterval(function () {
  if (!isPaused) {
    particles.push(
    new Particle(
    data[randomInt(0, data.length - 1)],
    {
      x: Math.random() * $(window).width(),
      y: $(window).height() },

    1 + Math.random() * 3));


  }
}, 80);

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  requestAnimationFrame(update.bind(this));
}
update();
