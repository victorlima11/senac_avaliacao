import express from 'express'
import connection from './db/db.js'
import morgan from 'morgan'

const app = express()
const PORT=3333
app.use(express.json())
app.use(morgan('dev'))


app.post('/cadastrar_cliente', (req, res) => {
  try{
    const { nome, email, senha, contato } = req.body
    const tipo = 'cliente'
    const sql = 'INSERT INTO cliente (nome, email, senha, contato, tipo) VALUES (?, ?, ?, ?, ?)'
    if(!nome || !email || !senha){
      return res.status(400).json({erro: 'Preencha todos os campos obrigatórios.'})
    }
    connection.query(sql, [nome, email, senha, contato, tipo])
    return res.status(200).json({"Sucesso": "Cliente criado com sucesso."})
  }catch(err){
      res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.post('/cadastrar_profissional', (req, res) => {
  try{
    const { nome, email, senha, contato } = req.body
    const tipo = 'profissional'
    const sql = 'INSERT INTO profissional (nome, email, senha, contato, tipo) VALUES (?, ?, ?, ?, ?)'
    if(!nome || !email || !senha){
      return res.status(400).json({erro: 'Preencha todos os campos obrigatórios.'})
    }
    connection.query(sql, [nome, email, senha, contato, tipo])
    return res.status(200).json({"Sucesso": "Profissional criado com sucesso."})
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.post('/agendamento', (req, res) => {
  try{
    const { id_cliente, id_profissional, data, horario, status } = req.body
    const sql = 'INSERT INTO agendamento (id_profissional, id_cliente, data, horario, status) VALUES (?, ?, ?, ?, ?)'
    if(!id_cliente || !id_profissional || !data || !horario ){
      return res.status(400).json({erro: 'Preencha todos os campos obrigatórios.'})
    }
    connection.query(sql, [id_profissional, id_cliente, data, horario, status])
    return res.status(200).json({"Sucesso": "Agendamento marcado com sucesso."})
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/agendamento_profissional/:id_profissional', (req, res) => {
  const { id_profissional } = req.params
  try{
    const sql = 'SELECT * FROM agendamento WHERE id_profissional = ?'
    connection.query(sql, [id_profissional], (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/agendamento_cliente/:id_cliente', (req, res) => {
  const { id_cliente } = req.params
  try{
    const sql = 'SELECT * FROM agendamento WHERE id_cliente = ?'
    connection.query(sql, [id_cliente], (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})


app.put('/atualizar_agendamento/:id_agendamento', (req, res) => {
  const { id_agendamento } = req.params
  try{
    const sql = 'UPDATE agendamento SET status = "concluido" WHERE id = ?'
     connection.query(sql, [id_agendamento], (err, result) => {
        res.status(200).json({"Sucesso": "Agendamento atualizado com sucesso."})
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/agendamentos', (req, res) => {
  try{
    const sql = 'SELECT * FROM agendamento'
     connection.query(sql, (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/agendamentos_renda', (req, res) => {
  try{
    const sql = 'SELECT SUM(preco) FROM agendamento'
     connection.query(sql, (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/profissionais', (req, res) => {
  try{
    const sql = 'SELECT * FROM profissional'
     connection.query(sql, (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})


app.get('/clientes', (req, res) => {
  try{
    const sql = 'SELECT * FROM cliente'
     connection.query(sql, (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/profissionais/:id', (req, res) => {
  const {id} = req.params
  try{
    const sql = 'SELECT * FROM profissional WHERE id = ?'
     connection.query(sql, [id], (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})

app.get('/clientes/:id', (req, res) => {
  const {id} = req.params
  try{
    const sql = 'SELECT * FROM cliente WHERE id = ?'
     connection.query(sql, [id], (err, result) => {
        res.status(200).json(result)
    })
  }catch(err){
    res.status(500).json({erro: 'Erro interno no servidor'})
  }
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})