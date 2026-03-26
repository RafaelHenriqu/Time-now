const Cache = {}
let TimeParts,t1,t2,t3

// --==-- Update --==-- //

async function Update(){
    if (!Cache["Time"]){
    try{
    const Api = await fetch("https://time.now/developer/api/timezone/America/Sao_Paulo") // https://time.now/developer
    if (Api.ok){
        const Data = await Api.json()
         let Time = Data.datetime.split('T')[1].split('.')[0]
            document.getElementById("time").innerHTML = Time
            Cache["Time"] = Time
            if (!Cache["Timezone"]){
                Cache["Timezone"] = Data.timezone
                document.getElementById("zone").innerHTML = Cache["Timezone"]
            }  
    }
    }catch(Error){
        console.error(`ERRO: ${Error}`)
    }
    }else{
        if (!TimeParts){
        TimeParts = Cache["Time"].split(":")
        t1 = Number(TimeParts[0])
        t2 = Number(TimeParts[1])
        t3 = Number(TimeParts[2])
        }
        t3 += 1
        if (t3 >= 60) { t3 = 0; t2 +=1 }
        if (t2 >= 60) { t2 = 0; t1 +=1 }
        if (t1 > 23) { t1 = 0}
        const ft1 = String(t1).padStart(2, '0')
        const ft2 = String(t2).padStart(2, '0')
        const ft3 = String(t3).padStart(2, '0')
        let Time = `${ft1}:${ft2}:${ft3}`

        document.getElementById("time").innerHTML = Time
    }
    
}
Update()
setInterval(Update,1000)

// --==-- Theme || Configs --==-- //
 
function ThemeUpdate(){
    let Theme = localStorage.getItem("Theme")
    if (!Theme){
        Theme = "light"
        localStorage.setItem("Theme","light")
    }
    document.querySelectorAll("main,#time,#zone").forEach(e=>{e.className = Theme})
}
// light
document.addEventListener("contextmenu",(e)=>{e.preventDefault()})
document.addEventListener("dblclick",(e)=>{
    localStorage.getItem("Theme") == 'light' ? localStorage.setItem("Theme","dark") : localStorage.setItem("Theme","light")
    ThemeUpdate()
})

ThemeUpdate()

