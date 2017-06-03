const Emitter = require('./emitter')

let emtr = new Emitter()

emtr.on('greet', ()=> {
  console.log('Someone said hi somewhere')
})

emtr.on('greet', () => {
  console.log('Another greeting happened!')
})


console.log('Hello!')
emtr.emit('greet')
