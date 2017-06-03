function Greetr() {
  this.greeting = 'function greetings from greet 4'
  this.greet = function() {
    console.log(this.greeting)
  }
}

module.exports = Greetr
