let container = document.querySelector(".container")
let musicPlayer = document.querySelector(".musicPlayer")
let test = document.querySelector(".test")
let audio = document.querySelector("audio")
let musicName = document.querySelector(".musicTitle")
let musicLoading = document.querySelector(".loading")
let playMusicBtn = document.querySelector(".playMusic")
let nextMusicBtn = document.querySelector(".nextMusic")
let prevMusicBtn = document.querySelector(".prevMusic")
let musicVolumeBtn = document.querySelector(".symVolume")
let musicVolumeBox = document.querySelector(".musicVolumeBox")
let musicVolumeBar = document.querySelector(".musicVolume")
let musicCover = document.querySelector(".coverMusic")
let musicCoverImg = document.querySelector(".coverMusicImg")

let clicked 
let musicVolume = 1
let musicIndex = 0


let music = [
    "Juice WRLD Ft Benny Blanco - Real Shit", 
    "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain", 
    "Polo G – I Know", 
  ];

function setVolume(percentage){
    audio.volume = percentage
}

function load(){
    if(musicIndex<0){
        musicIndex = music.length -1
    }else if(musicIndex>music.length -1){
        musicIndex = 0
    }
    musicName.innerHTML = music[musicIndex]
    let imageUrl = `/image/${music[musicIndex]}.jpg`
    musicCoverImg.src = imageUrl
    audio.src = `./music/${music[musicIndex]}.mp3`
    
}

load()
function playPause(){
    if(musicPlayer.classList.contains(".playMusicControl")){
        audio.pause()
        clicked = false
        playMusicBtn.classList.remove("fa-pause")
        playMusicBtn.classList.add("fa-play")
        musicPlayer.classList.remove(".playMusicControl")
    }else{
        audio.play()
        clicked = true
        playMusicBtn.classList.add("fa-pause")
        playMusicBtn.classList.remove("fa-play")
        musicPlayer.classList.add(".playMusicControl")
    }
}

nextMusicBtn.addEventListener("click",()=>{
    musicIndex++
    load()
    if(clicked){
        audio.play()
    }
   

})
prevMusicBtn.addEventListener("click",()=>{
    musicIndex--
    load()
    if(clicked){
        audio.play()

    }
    
})

audio.addEventListener("timeupdate",()=>{
    const {duration , currentTime} = audio
    musicLoading.style.width = `${(currentTime/duration)*100}%`
    console.log((currentTime/duration)*360)
    musicCover.style.transform = `rotate(${(currentTime/duration)*360}deg)`
})

playMusicBtn.addEventListener("click",playPause)

musicVolumeBox.onmousedown = function(){
    window.onmousemove = function(){
        if(event.movementY>0){
            musicVolume -=0.01
            if(musicVolume<0){
                musicVolume = 0
                

            }else{
                
            }
            setVolume(musicVolume)
        }if(event.movementY<0){
            musicVolume+=0.01
            if(musicVolume>1){
                musicVolume =1
            }
            setVolume(musicVolume)

        }
        if(musicVolume==0){
            musicVolumeBtn.classList.remove("fa-microphone")
                musicVolumeBtn.classList.add("fa-microphone-slash")
        }else{
            musicVolumeBtn.classList.add("fa-microphone")
                musicVolumeBtn.classList.remove("fa-microphone-slash")
        }
        musicVolumeBar.style.height = `${musicVolume*100}%`
    }
}


window.onmouseup = function(){
    musicVolumeBox.classList.add("hidden")

    window.onmousemove = function(){}
}

musicVolumeBtn.addEventListener("click",()=>{
    musicVolumeBox.classList.remove("hidden")
})

