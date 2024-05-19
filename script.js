
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

const author1 = new Author("Hovhannes Tumanyan", "hov@example.com", "Male");
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

/* class Account */
class Account {
	constructor(id, name, balance) {
		this._id = id;
		this._name = name;
		this._balance = balance;
	}
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}
	get balance() {
		return this._balance;
	}
	set balance(balance) {
		this._balance = balance;
	}
	credit(amount) {
		this._balance += amount;
		return this._balance;
	}
	debit(amount) {
		if (amount < this._balance) {
			this._balance -= amount;
			return this._balance;
		} else {
			console.log("Amount exceeded balance.");
		}
	}
	transferTo(anotherAccount, amount) {
		if (amount < this._balance) {
			this._balance -= amount;
			anotherAccount.credit(amount);
			return this._balance;
		} else {
			console.log("Amount exceeded balance.");
		}
	}
	static identifyAccounts(accountFirst, accountSecond) {
		return (
			accountFirst.id === accountSecond.id &&
			accountFirst.name === accountSecond.name &&
			accountFirst.balance === accountSecond.balance
		);
	}
	toString() {
		return `Account /ID: ${this.id}/ Name: ${this.name}/ Balance: ${this.balance}/`;
	}
}
const account1 = new Account(1, "Ani", 1000);
const account2 = new Account(2, "Ara", 2000);

console.log(account1.credit(600));
console.log(account1.debit(100));
console.log(account1.transferTo(account2, 500));
console.log(account1.toString());
console.log(Account.identifyAccounts(account1, account2));

/* class Person */
class Person {
	constructor(firstName, lastName, gender, age) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._gender = gender;
		this._age = age;
	}
	get firstName() {
		return this._firstName;
	}

	set firstName(firstName) {
		this._firstName = firstName;
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(lastName) {
		this._lastName = lastName;
	}

	get gender() {
		return this._gender;
	}

	set gender(gender) {
		this._gender = gender;
	}

	get age() {
		return this._age;
	}

	set age(age) {
		this._age = age;
	}
	toString() {
		return `Person: ${this._firstName} ${this._lastName}/ Gender: ${this._gender}/ Age: ${this._age}`;
	}
}

const person1 = new Person("Hamo", "Sahyan", "Male", "100");
console.log(person1.toString());

/* class Student */
class Student extends Person {
	constructor(firstName, lastName, gender, age, program, year, fee) {
		super(firstName, lastName, gender, age);
		this._program = program;
		this._year = year;
		this._fee = fee;
		this._exams = {}; 
	}
	get program() {
		return this._program;
	}

	set program(program) {
		this._program = program;
	}

	get year() {
		return this._year;
	}

	set year(year) {
		this._year = year;
	}

	get fee() {
		return this._fee;
	}

	set fee(fee) {
		this._fee = fee;
	}
	passExam(program, grade) {
		this._exams[program] = grade;
		let allPassed = true;
		for (const exam in this._exams) {
			if (this._exams.hasOwnProperty(exam)) {
				if (this._exams[exam] < 50) {
					allPassed = false;
					break;
				}
			}
		}
		if (allPassed) {
			this._year++;
		}
	}
	toString() {
		return `${super.toString()}/ Year: ${this._year}`;
	}
}
const student1 = new Student(
	"Poghos",
	"Poghosyan",
	"Male",
	20,
	["Math", "Physics"],
	1,
	1000
);
student1.passExam("Math", 60);
student1.passExam("Physics", 50);
console.log(student1.toString());

/* class Staff */
class Teacher extends Person {
	constructor(firstName, lastName, gender, age, program, pay) {
		super(firstName, lastName, gender, age);
		this._program = program;
		this._pay = pay;
	}

	get program() {
		return this._program;
	}

	set program(program) {
		this._program = program;
	}

	get pay() {
		return this._pay;
	}

	set pay(pay) {
		this._pay = pay;
	}

	toString() {
		return `${super.toString()}/ Program: ${this._program}/ Pay: ${this._pay}`;
	}
}
const teacher1 = new Teacher("Ani", "Poghosyan", "Female", 30, "Math", 150000);
console.log(teacher1.toString());
