export default class Person {
  constructor(name, age){
    this.name = '';
    this.age = 0;
  }
  async sayName(){
    return this.name;
  }
  blabla(){
    return this.name.includes('hi');
  }
}