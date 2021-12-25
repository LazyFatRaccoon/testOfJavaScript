"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.width * this.height;
  }
}

class ColoredRectanglesWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps() {
    console.log(
      `text - ${this.text}, color - ${this.bgColor}, width - ${this.width} `
    );
  }
}

const square = new Rectangle(10, 10);
const paintedRectangle1 = new ColoredRectanglesWithText(
  10,
  15,
  "this is my rectangle",
  "blue"
);

console.log(square.calcArea());
paintedRectangle1.showMyProps();
console.log(paintedRectangle1.calcArea());
