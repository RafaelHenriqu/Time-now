let Seconds
function Loading(){
    const Theme = {
    dark:{
      background:"#191920",
      color:"#dddedf",
    },
    white:{
      background:"#ffff",
      color:"#0f1118",
    }
  }

  
  if (localStorage.getItem("Tema")){
    const Tema = localStorage.getItem("Tema")

    document.querySelector('body').style.backgroundColor = Theme[Tema].background
    document.querySelector('body').style.color = Theme[Tema].color

  }else{
    localStorage.setItem("Tema","white")
  }
}
document.addEventListener("DOMContentLoaded",()=>{Loading()})
document.addEventListener("dblclick",(e)=>{e.preventDefault()})
document.addEventListener("contextmenu",(e)=>{e.preventDefault()})
async function TimeUpdate() {
 try{
  const Api = await fetch("https://www.timeapi.io/api/time/current/zone?timeZone=America%2FSao_Paulo")
  if (Api.ok){
    const Dados = await Api.json()
    Dados.seconds < 10 ? Seconds = `0${Dados.seconds}` : Seconds = Dados.seconds
    document.getElementById("Time_Now").innerHTML = `${Dados.time}:${Seconds}`
  }
 }catch(error){document.getElementById("Time_Now").innerHTML = `Algo falhou!`,console.error(error)} 
}

setInterval(TimeUpdate,500)
document.getElementById("Time_Now").addEventListener('click',()=>{
  localStorage.getItem("Tema") == "dark" ? localStorage.setItem("Tema","white") : localStorage.setItem("Tema","dark")
  Loading()
})