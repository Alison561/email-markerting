const knex = require('./connection')
const dataFactory = require('../Factories/dataFactory')
class indexModel{
    async insert(assunto, texto, data, hora){
        try {
            await knex('mensagem').insert({assunto: assunto, texto: texto, data: data, hora: hora})
        } catch (error) {
            console.log(error)
        }
    }

    async updateMensagem(id){
       await knex('mensagem')
        .where('id', id)
        .update({
            notificar: 'notificado'
        })
    }

    async email(email, nome){
        try {
            await knex('em_email').insert({email, nome})
        } catch (error) {
            console.log(error)
        }
    }

    async select(){
        try {
            var date = await knex('mensagem').where('notificar', '')
            var dados=[];
            date.forEach(element => {
                dados.push(dataFactory.formatarData(element)) 
            });
            return dados
        } catch (error) {
            console.log(error)
        }
    }

    async selectEmail(){
        try {
            return await knex.select().table('em_email')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new indexModel