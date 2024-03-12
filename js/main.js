const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

// Definindo a data de destino (20 de junho de 2024 às 19:00)
const endDate = new Date("2024-06-20T19:00:00").getTime();

const timeFunction = setInterval(() => {
    // Obtendo a data e hora atuais
    const now = new Date().getTime();
    
    // Calculando a diferença de tempo em milissegundos
    const timeDiff = endDate - now;

    // Convertendo a diferença de tempo para dias, horas, minutos e segundos
    let daysValue = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hoursValue = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minValue = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secValue = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Atualizando os elementos HTML com os valores calculados
    seconds.textContent = secValue < 10 ? 0${secValue} : secValue;
    minutes.textContent = minValue < 10 ? 0${minValue} : minValue;
    hours.textContent = hoursValue < 10 ? 0${hoursValue} : hoursValue;
    days.textContent = daysValue < 10 ? 0${daysValue} : daysValue;

    // Verificando se a data de destino foi atingida e parando o contador
    if (timeDiff <= 0) {
        clearInterval(timeFunction);
        console.log("Contagem regressiva concluída!");
    }
}, 1000);
