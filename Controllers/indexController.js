const emailmarketing = require('../Model/indexModel')
const nodemailer = require("nodemailer")
class indexController{

    async home(req, res){ 
        res.render('index')
    }

    getCadastrarEnvio(req, res){ 
        res.render('mensagem')
    }

    postCadastrarEnvio(req, res){ 
        var {assunto, texto, data, hora} = req.body
        emailmarketing.insert(assunto, texto, data, hora)
        res.redirect('/')
    }

    getCadastrarEmail(req, res){ 
        res.render('email')
    }

    postCadastrarEmail(req, res){ 
        var {email, nome} = req.body
        emailmarketing.email(email, nome)
        res.redirect('/')
    }

    async sendEmail(){
        var mensage = await emailmarketing.select()
        var email = await emailmarketing.selectEmail()

        console.log(mensage)

        var transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: { 
                user: 'souzalison561@gmail.com', 
                pass: '741852Ali' 
            } 
         })


        mensage.forEach( app => {
            var date = app.dataTime.getTime()
            var hour = 0
            var gap = date - Date.now()

            if (gap <= hour) {
                email.forEach(element => {
                    transporter.sendMail({
                        from: "Alison Souza <souzalison561@gmail.com>",
                        to: element.email,
                        subject: app.assunto,
                        text: app.texto
                    })
                });
                emailmarketing.updateMensagem(app.id)
            }
        })




    }


}

module.exports = new indexController