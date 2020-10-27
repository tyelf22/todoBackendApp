const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    todo: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Todo', todoSchema)