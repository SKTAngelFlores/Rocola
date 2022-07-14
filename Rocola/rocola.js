const audio=document.getElementById("audio");
const playPause= document.getElementById("play");

playPause.addEventListener("click", () =>{
    if(audio.paused){
        audio.play();
        playPause.innerHTML="Pause";
    }else{
        audio.pause();
        playPause.innerHTML="Play";
    }
} );
