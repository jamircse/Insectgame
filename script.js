let screen=document.querySelectorAll(".screen");
let choice_insect_btn=document.querySelectorAll(".choice-insect-btn");
let btn_start=document.getElementById("btn_start")
let game_container=document.querySelector(".game-container");
let scoreEl=document.querySelector(".score");
let timeEl=document.querySelector(".time")
let seconds=0
let score=0
let selected_insect={}

btn_start.addEventListener('click',()=>{
    screen[0].classList.add("up")
})

choice_insect_btn.forEach( btn=>{
        btn.addEventListener('click',()=>{
        const imgSelect=btn.querySelector('img')
        const src=imgSelect.getAttribute('src')
        const alt=imgSelect.getAttribute('alt')
        selected_insect={src,alt}
        screen[1].classList.add('up')
        setTimeout(createInsect,1000)
        startGame()
        
    })
})

function createInsect(){
    const insect=document.createElement('div')
    insect.classList.add('insect')
    const {x,y}=getRandomLocation();
    insect.style.top=`${y}px`
    insect.style.left=`${x}px`
    insect.innerHTML=`<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate( ${Math.random()*360}deg)" />`   
    insect.addEventListener('click',catchInsect)
    game_container.appendChild(insect)
    
}
function getRandomLocation(){
     const width=window.innerWidth
     const height=window.innerHeight
     const x=Math.random()*(width-200)+100
     const y=Math.random()*(height-200)+100
     return {x, y }
}

function startGame(){
    setInterval(increaseTime,1000)
}

function increaseTime(){
    let m=Math.floor(seconds/60)
    let s=seconds%60
    m=m<10 ?`0${m}`:m
    s=s<10 ?`0${s}`:s
    timeEl.innerHTML=`Time : ${m}:${s}`
    seconds++;
}
 function catchInsect(){
    increaseScore()
     this.classList.add('caught')
     setTimeout(()=>this.remove(),2000)
     addInsects()
}
function increaseScore(){
    score++;
    
    scoreEl.innerHTML=`Score: ${score}`
}
function addInsects(){
    setTimeout(createInsect,1000)
    setTimeout(createInsect,1500)
    
}