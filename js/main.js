const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

const endDate = new Date("2024-06-20T19:00:00").getTime();

const timeFunction = setInterval(() => {

    const now = new Date().getTime();
    
    const timeDiff = endDate - now;

    let daysValue = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hoursValue = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minValue = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secValue = Math.floor((timeDiff % (1000 * 60)) / 1000);

    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
    days.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;

    if (timeDiff <= 0) {
        clearInterval(timeFunction);
        console.log("Contagem regressiva concluída!");
    }
}, 1000);
