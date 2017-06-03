const Emitter = require('events')
const eventConfig = require('./config').events

let emtr = new Emitter()

emtr.on(eventConfig.GREET, ()=> {
  console.log('Someone said hi somewhere')
})

emtr.on(eventConfig.GREET, () => {
  console.log('Another greeting happened!')
})


console.log('Hello!')
emtr.emit(eventConfig.GREET)
