class dataFactory{

    formatarData(date){
        var day = date.data.getDate();
        var month = date.data.getMonth();
        var year = date.data.getFullYear();
        var hour =  Number.parseInt(date.hora.split(":")[0]);
        var minutes = Number.parseInt(date.hora.split(":")[1]);
        var startDate = new Date(year,month,day,hour,minutes,0,0);
        
        var dat = {
            id: date.id,
            assunto: date.assunto, 
            texto: date.texto,
            notificar: date.notificar,
            dataTime: startDate,
        }

        return dat;
    }
}

module.exports = new dataFactory