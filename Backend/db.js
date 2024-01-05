/*
    Todo {
        title: string,
        descrption: string,
        completed: string
    }

*/
require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo
}