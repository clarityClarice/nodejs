const express = require('express')

const server = express()

let counter = 0;

//query params = ?teste-2
//route params = /users/3
//request body = { 'name:' diego, etc}

server.use(express.json());

server.use((req, res, next)=> {
    console.log(`Requisições realizadas: ${counter += 1}`)
    return next();
})

function checkProjectId(req, res, next){
    const { id } = req.params
    const project = projects.find(project => project.id == id)

    if (!project){
        return res.status(400).json({ error: "ID não encontrado"})
    }

    return next();
}

const projects = [{
    id: 0,
    title: "Novo projeto",
    tasks: ["Primeira task", "Segunda task"]
}]

server.get('/projects', (req, res) => {
    return res.json(projects)
})
server.get('/projects/:id', (req, res) => {
    const { id } = req.params
    const project = projects.find(project => project.id == id)
    return res.json(project)
})
server.get('/projects/:id/tasks', (req, res) => {
    const { id } = req.params
    const project = projects.find(project => project.id == id)
    return res.json(project.tasks)
})



server.post('/projects', (req, res) => {
    const { id, title, tasks } = req.body

    projects.push({id, title, tasks})
    
    return res.json(projects)
})
server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params
    const { tasks } = req.body

    const index = projects.findIndex(project => project.id == id)
    console.log(tasks)
    tasks.forEach( task => {
        projects[index].tasks.push(task)
    })

    return res.json(projects[index])
})




server.delete('/projects/:id', (req, res) => {
    const { id } = req.params
    const index = projects.findIndex(project => project.id == id)
    projects.splice(index, 1)
    return res.json("Projeto removido com sucesso")
})

server.listen(3000)