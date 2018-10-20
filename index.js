class Slider {
  constructor(sliderNode) {
    this.sliderNode = document.querySelector(sliderNode);
    this.color='00'
  }
  setColor() {
    const pad = (n) => (n.length == 1) ? "0" + n : n;
    this.color = pad(parseInt(this.sliderNode.value, 10).toString(16));
  }
  getColor() {
    return this.color;
  }
}

class Circle {
  constructor(circleName) {
      this.circle = document.querySelector(circleName);
  }
  setColor(hex) {
      this.circle.style.fill = hex; 
    }
}

class SliderBoard {

  constructor(circleName, redSliderName, greenSliderName, blueSliderName) {
      this.circle = new Circle(circleName);
      this.redSlider = new Slider(redSliderName);
      this.greenSlider = new Slider(greenSliderName);
      this.blueSlider =new Slider(blueSliderName);
      }

  startWatch() {
      [this.redSlider, this.greenSlider, this.blueSlider].forEach((slider) => {
        slider.sliderNode.addEventListener('change', () => {
          slider.setColor();
          this.refreshColor();
          }, false);
        
        slider.sliderNode.addEventListener('input', () => {
          slider.setColor();
          this.refreshColor();
        }, false);
      })
  }
  refreshColor() {
      let    r_hex = this.redSlider.getColor();
      let    g_hex = this.greenSlider.getColor();
      let    b_hex = this.blueSlider.getColor();
      let    hex = "#" + r_hex + g_hex + b_hex;
      this.circle.setColor(hex)
  }
}
let sliderBoard = new SliderBoard('#circle', '#r', '#g', '#b');
sliderBoard.startWatch();


