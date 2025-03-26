function Loading(){
  if (localStorage.Tema){
    switch(localStorage.Tema){
      case 'Dark':
        document.querySelector('body').style.backgroundColor = '#191920'
        document.querySelector('body').style.color = 'rgb(221, 222, 223)'
        break
      case 'White':
        document.querySelector('body').style.backgroundColor = '#ffff'
        document.querySelector('body').style.color = 'rgb(15, 17, 24)'
        break
      default:
        break

    }
  }else{
    localStorage.Tema = "White"
  }



}






async function TimeUpdate() {
    
 try{
  
  const Api = await fetch("https://www.timeapi.io/api/time/current/zone?timeZone=America%2FSao_Paulo")
  if (Api.ok){
    const Dados = await Api.json()
    if (Dados.seconds < 10){
      var Seconds = `0${Dados.seconds}` 
    }else{
      Seconds = Dados.seconds
    }

    document.getElementById("Time_Now").innerHTML = `${Dados.time}:${Seconds}`
  }

 }catch{
  document.getElementById("Time_Now").innerHTML = `ERRO`
 } 
 

    




}

setInterval(TimeUpdate,1000)
 
document.getElementById("Time_Now").addEventListener('click',()=>{
    if (localStorage.Tema == "Dark"){
      localStorage.Tema = "White"
    }else{
      localStorage.Tema = "Dark"
    }
    

    Loading()
    
})