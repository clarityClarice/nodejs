const express = require('express')

const server = express()

//query params = ?teste-2
//route params = /users/3
//request body = { 'name:' diego, etc}

server.get('/teste', (req, res) => {
    const nome = req.query.nome;


    return res.json({ message: `Hello ${nome}`})
})


server.listen(3000)