const express = require('express');
const { creatTodo, updateTodo } = require('./type');
const { todo } = require('./db');

const app = express();

app.use(express.json())

app.post("/todo", async (req, res)=>{
    const creatPayload = req.body;
    const parsePayload = creatTodo.safeParse(creatPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong input",
        })
        return;
    }

    await todo.create({
        title: creatPayload.title,
        description: creatPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res)=>{
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong input",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked completed"
    })
})

app.listen(3000,()=>{
    console.log("Listening at 3000")
})