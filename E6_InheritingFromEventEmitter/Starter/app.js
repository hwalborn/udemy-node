const EventEmitter = require('events')
const util = require('util')

function Greetr() {
  this.greeting = "hi"
}

util.inherits(Greetr, EventEmitter)

Greetr.prototype.greet = function(data) {
  console.log(this.greeting +': ' + data)
  this.emit('greet', data)
}

let greeter1 = new Greetr()

greeter1.on('greet', (data) => {
  console.log('someone made a greet: ' + data)
})

greeter1.greet('Me')
