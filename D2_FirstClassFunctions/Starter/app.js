// Your Javascript Code Goes Here
const greet = (name = "") => {
  console.log(`hi ${name}`)
}
greet()

const logGreeting = (fn) => {
  fn()
}
logGreeting(greet)

let greetMe = function() {
  console.log("Hi Holt")
}
greetMe()

logGreeting(greetMe)

logGreeting(() => {
  console.log('Hello Holt!')
})
