
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondHand = document.querySelector('.second-hand');
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    
    const minutes = now.getMinutes();
    const minHand = document.querySelector('.min-hand');
    const minutesDegrees = ((minutes/60)*360)+90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);
    
    const hours = now.getHours();
    const hourHand = document.querySelector('.hour-hand');
    const hoursDegrees = ((hours/12) *360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
};

setInterval(setDate, 1000);


