var getButtons=document.querySelectorAll(".drum");
for(var i=0;i<getButtons.length;i++)
{
    getButtons[i].addEventListener("click",togetsound)
}
function togetsound(){
    var getText=this.innerHTML;
    playsound(getText);
}
document.addEventListener("keydown",openSound)
function openSound(even){
    playsound(even.key);
}
function playsound(key){
    if(key=='w')
        {
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
        }
    else if(key=='a')
    {
       var audio=new Audio("./sounds/tom-2.mp3");
       audio.play();
    }
    else if(key=='s')
    {
        var audio=new Audio("./sounds/tom-3.mp3");
        audio.play();
    }
    else if(key=='d')
    {
        var audio=new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
    else if(key=='j')
    {
        var audio=new Audio("./sounds/snare.mp3");
        audio.play();
    }
    else if(key=='l')
    {
        var audio=new Audio("./sounds/kick-bass.mp3");
        audio.play();
    }
    else if(key=='k')
    {
        var audio=new Audio("./sounds/crash.mp3")
        audio.play();
    }
    
}