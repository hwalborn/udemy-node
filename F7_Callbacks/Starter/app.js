const greet = (callback) => {
  console.log('Hi')
  let data = {
    name: 'Frankie'
  }
  callback(data)
}

greet((data) => {
  console.log('callback time')
  console.log(data);
})

greet((data) => {
  console.log('another callback!')
  console.log(data.name);
})
