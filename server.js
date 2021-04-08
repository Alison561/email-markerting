const express = require('express')
const app = express()

const indexController = require('./Controllers/indexController')

app.use(express.urlencoded({urlencoded:false}))
app.use(express.json())

app.use(express.static('Public'))
app.set('views', 'Views')
app.set('view engine', 'ejs')

app.get('/', indexController.home)

app.get('/cadastrar/mensagem', indexController.getCadastrarEnvio)
app.post('/cadastrar/mensagem', indexController.postCadastrarEnvio)


app.get('/cadastrar/email', indexController.getCadastrarEmail)
app.post('/cadastrar/email', indexController.postCadastrarEmail)

app.listen(3000)

let temp = 1000 * 60 * 10



setInterval(() => {
    indexController.sendEmail()
}, temp);