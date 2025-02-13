const mongoose = require ('mongoose')
const dbUri = 'mongodb+srv://johnofisher01:<db_password>@databasetestjf1.ktdqvew.mongodb.net/book_register?retryWrites=true&w=majority&appName=DatabaseTestJf1'


module.exports = () =>  { return mongoose.connect(dbUri)}