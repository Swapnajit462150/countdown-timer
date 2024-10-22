const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const startbtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
let audio = new Audio("alert.mp3")


const updateCountdown =(deadline)=>{
    if(days.innerText == "00" && hours.innerText == "00" && mins.innerText == "00" && secs.innerText == "00"){

       location.reload()
        
        return;
        

    }else{
       
        const currentTime = new Date();
        const timeDifference = deadline - currentTime;
    
        let calSecs = Math.floor(timeDifference/1000) % 60;
        let calMins = Math.floor(timeDifference/1000/60) % 60;
        let calHours = Math.floor(timeDifference/1000/60/60) % 24 ;
        let calDays = Math.floor(timeDifference/1000/60/60/24) ;
    
    
        
        days.innerText = formatTime(calDays);
        hours.innerText = formatTime(calHours);
        mins.innerText = formatTime(calMins);
        secs.innerText = formatTime(calSecs);
        if(days.innerText == "00" && hours.innerText == "00" && mins.innerText == "00" && secs.innerText == "11"){
            audio.play();
          }
    }
     
    
    }
    const formatTime = (time)=>{
        return time < 10 ? `0${time}` : time;
}
const countDown = (targetDate)=>{
    setInterval(()=>updateCountdown(targetDate),1000)
}
 startbtn.addEventListener('click',()=>{
    let input = document.getElementById('input').value;
   let timerdate = new Date(input)
    console.log(timerdate)
    countDown(timerdate);
 });
 resetBtn.addEventListener('click',()=>{
    location.reload();
 })



