let video = document.querySelector("video")
let videoPlayBtn = document.querySelector(".videoPlayBtn")
let containerOne = document.querySelector(".video")
let videoLoading = document.querySelector(".videoProgress")
let videoSkipSec = document.querySelector(".skipSecond")
let videoPrevSec = document.querySelector(".prevSecond")


function videoPlayPause(){
    console.log("sdfhsdf")
    if(containerOne.classList.contains("playVideo")){
        video.pause()
        containerOne.classList.remove("playVideo")
        videoPlayBtn.innerHTML = "Play"

    }else{
        video.play()
        containerOne.classList.add("playVideo")
        videoPlayBtn.innerHTML = "Pause"

    }
}

videoPlayBtn.addEventListener("click",videoPlayPause)

video.addEventListener("timeupdate",()=>{
    const {duration ,currentTime} = video
    let percent = (currentTime/duration)*100
    
    videoLoading.style.width = `${percent}%`
})

videoSkipSec.addEventListener("click",()=>{
    video.currentTime+=15

})

videoPrevSec.addEventListener("click",()=>{
    video.currentTime-=10

})