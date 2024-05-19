/** @format */

/* class Author */
class Author {
	constructor(name, email, gender) {
		this._name = name;
		this._email = email;
		this._gender = gender;
	}
	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	get email() {
		return this._email;
	}

	set email(email) {
		this._email = email;
	}

	get gender() {
		return this._gender;
	}

	set gender(gender) {
		this._gender = gender;
	}

	toString() {
		return `${this.name} / ${this.gender} / ${this.email}`;
	}
}

const author1 = new Author("John Doe", "john@example.com", "Male");
console.log(author1.toString());

/* class Book */
class Book {
	constructor(title, author, price, quantity) {
		this._title = title;
		this._author = author;
		this._price = price;
		this._quantity = quantity;
	}
	get title() {
		return this._title;
	}
	set title(title) {
		this._title = title;
	}
	get author() {
		return this._author;
	}
	set author(author) {
		this._autor = author;
	}
	get price() {
		return this._price;
	}
	set price(price) {
		this._price = price;
	}
	get quantity() {
		return this._quantity;
	}
	set quantity(quantity) {
		this._quantity = quantity;
	}
	getProfit() {
		return this.price * this.quantity;
	}
	toString() {
		return `${this.title} by ${this.author.name} / Price: ${this.price}$, Quantity of books: ${this.quantity}`;
	}
}

const book1 = new Book("Book", author1, 30, 50);
console.log(book1.toString());
console.log(`Profit from ${book1.title}: ${book1.getProfit()}$`);
