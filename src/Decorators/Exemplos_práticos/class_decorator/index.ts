function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen2 {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(111)
const newPen = new Pen2(22)

console.log(newBook)
console.log(newPen)
