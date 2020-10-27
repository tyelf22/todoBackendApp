const express = require('express')
const router = express.Router()
const Todo = require('../models/todos')

//Get all products
router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find()
        res.json(todos)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Get single product
router.get('/:id', async (req, res) => {
    try{
        const todos = await Todo.findById(req.params.id)
        res.json(todos)
    }catch(err){
        res.send(`Error ${err}`)
    }
})


//Create Products
router.post('/', async(req, res) => {
    const todo = new Todo({
        todo: req.body.todo,
        complete: req.body.complete,
        category: req.body.category

    })

    try{
        const newTodo = await todo.save()
        res.json(newTodo)
    }catch{
        res.send('Error')
    }
})

// Patch todo
router.put('/:id', async(req, res) => {
    try{
        const todo = await Todo.findById(req.params.id)

        todo.complete = req.body.complete
        
        const newTodo = await todo.save()
        res.json(newTodo)
    }
    catch(err){
        res.send(err)
    }
})


//Delete products
router.delete('/:id', async(req, res) => {
    try{
        const todo = await Todo.findById(req.params.id)
        const newTodo = await todo.remove()
        res.json(newTodo)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router
