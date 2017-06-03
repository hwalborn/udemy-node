let obj = {
  greet: 'Hi'
}

console.log(obj.greet)
console.log(obj["greet"])
let prop = 'greet'
console.log(obj[prop])

let arr = []

arr.push(() => {
    console.log('hello 1')
})
arr.push(() => {
    console.log('hello 2')
})
arr.push(() => {
    console.log('hello 3')
})

arr.forEach((item) => {
  item()
})
