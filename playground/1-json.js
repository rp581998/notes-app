const fs = require('fs')

// const books = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const booksJSON = JSON.stringify(books)
// console.log(booksJSON)

// const parseData = JSON.parse(booksJSON)
// console.log(parseData.author)
//fs.writeFileSync('1-json.json', booksJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Rajan'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)









