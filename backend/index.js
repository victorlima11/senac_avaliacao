import express from 'express'
import connection from './db/db.js'

const app = express()
const PORT=3333
app.use(express.json())

// app.get('/', (req, res) => {
//     const sql = 'SELECT * FROM cliente'
//     connection.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).send('Error adding user');
//         }
//         res.status(200).json(result)
//     })
// })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
