// Your Javascript Code Goes Here
class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  greet(){
    console.log(`Hi ${this.firstName} ${this.lastName}`)
  }
}
let holt = new Person("Holt", "Walborn")
holt.greet()
console.log(holt.__proto__)
