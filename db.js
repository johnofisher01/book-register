const mongoose = require ('mongoose')
const dbUri = 'mongodb+srv://billy:12341234@databasetestjf1.ktdqvew.mongodb.net/book_register?retryWrites=true&w=majority&appName=DatabaseTestJf1'


module.exports = () =>  { return mongoose.connect(dbUri)}