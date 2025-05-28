import express from 'express'
import { erroMiddleware } from './middleware/erroMiddleware.js'
import clienteControllers from './controllers/clienteControllers.js'
const app = express()
const PORT=3333
app.use(express.json())
app.use(erroMiddleware)

// app.get('/', (req, res) => {
//     const sql = 'SELECT * FROM cliente'
//     connection.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).send('Error adding user');
//         }
//         res.status(200).json(result)
//     })
// })

app.get('/', clienteControllers.getAll)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
