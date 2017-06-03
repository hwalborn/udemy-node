function Greetr() {
  this.greeting = 'function greetings'
  this.greet = function() {
    console.log(this.greeting)
  }
}

module.exports = new Greetr()
