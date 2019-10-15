const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
require('express-group-routes')
const app = express()
const port = 7000

app.use(bodyParser.json())

const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoon')
const UserController = require('./controllers/users')

const { authenticated } = require('./middleware')

app.group("/webtoon/api/v1", (router) => {
    //todos API
    router.post('/login', AuthController.login)

    // -----------Routing webtoon -----------------
    router.get('/webtoons', WebtoonController.index)    
    router.get('/webtoon/:id', WebtoonController.show) 
    router.get('/webtoon/:id/episode', WebtoonController.episode)   
    router.get('/webtoon/:id/episode/:id', WebtoonController.detailepisode)  
    router.post('/webtoon', WebtoonController.store)    
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete)
    // -------------------------------------------------------
    // --------------------- Routing User----------------------
    router.get('/users', UserController.index)    
    router.get('/webtoon/user/:id', UserController.show)    
    router.post('/webtoon/user', UserController.store)     
    router.patch('/webtoon/user/:id', UserController.update)    
    router.delete('/webtoon/user/:id', UserController.delete)

    
})

app.listen(port, () => console.log(`Listening on port ${port}!`))