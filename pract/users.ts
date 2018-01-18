class User {

	private _name: string;
	private _age: number;

	constructor();
	constructor(name: string, age: number);

	constructor(name?: string, age?: number) {
		this._name = name;
		this._age = age;
	}

	set name(name: string) {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	set age(age: number) {
		this._age = age;
	}

	get age(): number {
		return this._age;
	}
};

module.exports = User;
