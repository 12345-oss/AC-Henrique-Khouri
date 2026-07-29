require('dotenv').config()
const mongoose = require('mongoose')

// A string de conexao vem da variavel de ambiente MONGODB_URI
const conn = async()=>{ await mongoose.connect(process.env.MONGODB_URI) }

module.exports = conn
