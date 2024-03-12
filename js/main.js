const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 60,
minValue = 60,
hoursValue = 24,
daysValue = 100;

const timeFunction = setInterval(() =>{
    secValue--;

    if(secValue == 0){
        minValue--;
        secValue =60;
    }
    if (minValue == 0){
        hoursValue--;
        minValue = 60
    }
    if (hoursValue == 0){
        daysValues--;
        hoursValue = 24;
    }
    if(daysValue === 0){
        clearInterval (timefunction);
    }
    console.log(secValue);
    seconds.textContent = secValue < 10 ? `0${secValue}`: secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}`: minValue;
    hours.textContent = hoursValue < 10 ? `0${hoursValue}`: hoursValue;
    days.textContent = daysValue < 10 ? `0${daysValue}`: daysValue;


},1000)