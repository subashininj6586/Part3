
const express = require('express')
const app = express()

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "subashini",
    number: "1223445",
    id: 4
  },
]

let count = persons.length
console.log(count)
let today = new Date()

console.log(today)
app.get('/', (request, response) => {
  response.send('phone book have info of '+ count +' people' +'<br></br>'+ today)
  
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})