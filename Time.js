function TimeUpdate()
{
 const Data = new Date()
 const Segundos = Data.getSeconds()
 const Minutos = Data.getMinutes()
 const Horas = Data.getHours()
document.getElementById('HorarioAgora').innerHTML = `${Horas}:${Minutos}:${Segundos} `
}
function Segredo()
{

document.querySelector('body').style.backgroundColor = '#191920'
document.querySelector('body').style.color = 'rgb(221, 222, 223)'


}

setInterval(TimeUpdate,1000)