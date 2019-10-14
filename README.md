# nodejs
Repositorio para o curso de Nodejs da Rocketseat. Trata-se de um simples CRUD.

## Funcionalidades
### Get
  * server.get('/projects) -  retorna todos os projetos listados na api
  * server.get('/projects/:id) - retorna apenas o projeto com a id repassada
  * server.get('/projects/:id/tasks) - retorna apenas as tasks listadas do projeto referente
    
### Post
  * server.post('/projects) - Acrescenta um projeto à lista, passando id, title e tasks no corpo da requisição
  * server.post ('/projects/:id/tasks) - Acrescenta tasks à lista de tasks do projeto referente

### Delete
  * server.delete('/projects/:id') - deleta o projeto referenciado pelo id

### Put
  *server.put('/projects/:id') - altera o titulo passado no corpo da requisição do projeto com o id referente
