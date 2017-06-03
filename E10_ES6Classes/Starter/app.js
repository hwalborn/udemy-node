'use strict'

class Person {
  constructor(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
  }

  greet(){
    console.log(`Hello ${this.firstname} ${this.lastname}`)
  }
}

let bob = new Person("Bob", "Blart")

bob.greet()
