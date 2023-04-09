# JavaScript Quiz Basic Level 3

### Theory

Q1. Explain as much as you know about objects in javascript? (A long answer expected)
ans. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

Q2. Make a "class" based alternative to the object based vector template.
ans
```js
class Vector {
	constructor () {
		this.x = 0
		this.y = 0
	}

	set setX(x) {
		this.x = x
	}

	set setY(y) {
		this.y = y
	}

	create(x, y) {
		let obj = Object.create(this)
		obj.setX = x
		obj.setY = y
		return obj
	}
}

let vec1 = new Vector()
console.log(vec1.create(1, 2)) // Output:- Vector { x: 1, y: 2 }
```


Q3. Do you think JavaScript is the language of the future?
ans. avaScript is the present and the near future of programming.

There are two good reasons for this:

* JavaScript is the native language of the web, and the web is rapidly expanding.
* Because of this, JavaScript is receiving a tremendous amount of attention from developers who are improving its performance and expanding its functionality.

As JavaScript improves, more and more people will use it.