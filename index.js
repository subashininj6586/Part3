const { request } = require('express');
const express = require('express');

const app = express();
app.use(express.json())

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
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
      }
    ]
    const generateId = () => {
      const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
      return maxId + 1
    }
  
    app.post("/api/persons", (req, res) => {
      const body = req.body
      const id = generateId()
      const nameExists = persons.some((person) => person.name === body.name)
    
      if (!body.name || !body.number) {
        return res.status(400).json({
          error: "name or number is missing",
        })
      }
    
      if (nameExists) {
        return res.status(400).json({
          error: "name already exists",
        })
      }
    
      const newPerson = {
        name: body.name,
        number: body.number,
        id,
      }
      persons = persons.concat(newPerson)
      res.json(newPerson)
    })
    
     app.delete('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      persons = persons.filter(person => person.id !== id)
    
      response.status(204).end()
    })
app.get('/api/persons',(req,res) => {
    res.json(persons)
});


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})