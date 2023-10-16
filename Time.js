function TimeUpdate() {
    const Data = new Date();
 
    
    const Segundos = Data.getSeconds();
    const Minutos = Data.getMinutes();
    const Horas = Data.getHours();
  
    const horaFormatada = `${Horas < 10 ? '0' + Horas : Horas}:${Minutos < 10 ? '0' + Minutos : Minutos}:${Segundos < 10 ? '0' + Segundos : Segundos}`;
  
    document.getElementById('HorarioAgora').innerHTML = horaFormatada;
  }
setInterval(TimeUpdate,1)

function ModoEscuro()
{
    document.querySelector('body').style.backgroundColor = '#191920'
    document.querySelector('body').style.color = 'rgb(221, 222, 223)'
    
}