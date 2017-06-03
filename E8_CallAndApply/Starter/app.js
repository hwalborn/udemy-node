let obj = {
  name: 'Frankie Face',
  greet() {
    console.log(`Hi ${this.name}`)
  }
}

obj.greet()

obj.greet.call({ name: "Johnny Junk" })
