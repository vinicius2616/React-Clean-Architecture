export class Person {
  id: number
  name: string
  age: number

  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }

  displayInformation(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  }
}
