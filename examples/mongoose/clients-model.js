const mongoose = require('mongoose')

const { Schema } = mongoose

const ClientsSchema = new Schema({
  month: String,
  amount: Number,
})

const Clients = mongoose.model('Clients', ClientsSchema)

module.exports = Clients
