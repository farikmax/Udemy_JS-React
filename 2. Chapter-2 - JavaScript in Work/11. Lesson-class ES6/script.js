// классы (ES6)2015 - 47
"use strict";
//имя класса всегда должно быть с большой буквы
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	//Method
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());
// ---------------------------------------------------extends - наследуеться
class ColorRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		//super - вызывает все данные от родителя
		// ! Всегда должно быть сверху на 1м месте
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Text: ${this.text}, color: ${this.bgColor}`);
	}
}
const div = new ColorRectangleWithText(25, 10, "Hello World!", "red");

div.showMyProps();
console.log(div.calcArea());
