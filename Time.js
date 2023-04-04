function TimeUpdate()
{
 const Data = new Date()
 const Segundos = Data.getSeconds()
 const Minutos = Data.getMinutes()
 const Horas = Data.getHours()
document.getElementById('HorarioAgora').innerHTML = `${Horas}:${Minutos}:${Segundos} `
}

setInterval(TimeUpdate,1000)