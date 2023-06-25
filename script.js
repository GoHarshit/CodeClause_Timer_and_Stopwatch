

let [days,hours, minutes, seconds]=[00,00,00,00];
let display=document.getElementById("displayTime");
let timer=null;

function Stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
            if(hours==24){
                days++;
                hours=0;
            }
        }
    }
    let d=days<10 ? "0"+days: days;
    let h=hours<10 ? "0"+hours: hours;
    let m=minutes<10 ? "0"+minutes: minutes;
    let s=seconds<10 ? "0"+seconds: seconds;

    display.innerHTML=d+" d : "+h +" hr : "+ m +" min : "+s+" sec";
}

function start(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(Stopwatch,1000);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [days,hours, minutes, seconds]=[00,00,00,00];
    display.innerHTML="00 d :00 hrs :00 min :00 sec";
}


   
        