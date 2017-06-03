let greet1 = require('./greet1')
let greet2 = require('./greet2').greet
let greet3 = require('./greet3')
let greet3b = require('./greet3')
let Greet4 = require('./greet4')
let greet5 = require('./greet5').greet

greet1()
greet2()
greet3.greet()
greet3.greeting = "didn't work"
greet3b.greet()
greet3.greet()

let grtr = new Greet4()
let grtrb = new Greet4()
grtr.greet()
grtr.greeting = "changed it yo"
grtr.greet()
grtrb.greet()
greet5()
