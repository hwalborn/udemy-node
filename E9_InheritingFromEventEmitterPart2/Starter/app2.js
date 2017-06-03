const util = require('util')

class Person {
  constructor(){
    this.firstname = 'Frankie'
    this.lastname = 'Fake'
  }

  greet(){
    console.log(`hi ${this.firstname} ${this.lastname}`)
  }
}

class Policeman extends Person{
  constructor(){
    super()
    this.badgenumber = '1234'
  }
}

util.inherits(Policeman, Person)

let officer = new Policeman
console.log(officer)
officer.greet()
