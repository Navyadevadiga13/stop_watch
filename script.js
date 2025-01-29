let timerDisplay=document.querySelector('.timerdisplay');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');
let hour = 0;
let secs = 0;
let msec=0;
let mins = 0;
let timerId=null;
startbtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

stopbtn.addEventListener('click',function(){
   clearInterval(timerId);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00:00`;
    hour=msec=secs=mins=0;
 });
 
function startTimer(){
    msec++;
    if(msec==100)
    {
        msec=0;
        secs++;
        if(secs==60)
        {
            secs=0;
            mins++;
            if(mins==60)
            {
                mins=0;
                hour++;
            }
         
        }

    }
  
    
let msecString=msec<10?`0${msec}`:msec;
let secString=secs<10?`0${secs}`:secs;
let minsString=mins<10?`0${mins}`:mins;
let hourString=mins<10?`0${hour}`:hour;
timerDisplay.innerHTML=`${hourString}:${minsString}:${secString}:${msecString}`;
    // secs++;
    // if(secs==60){
    //     secs=0;
    //     mins++;
    //     if(mins==60){
    //         mins=0;
    //         hour++;
    //     }
    // }
}
