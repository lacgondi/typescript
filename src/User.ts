export class User {
    #name: String;
    #age: number;
  
    constructor(name: String, age: number) {
      this.#name = name;
      this.#age = age;
    }
  
    kiir():void{
      console.log(this.#name, this.#age);
    }
  }