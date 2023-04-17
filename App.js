const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown")
// Назначения даты отсчета
let countdownDate = new Date(2025, 03, 17, 12, 54, 00).getTime();

function getCountdowmTime() {


    //Получить текущее время
    const now = new Date().getTime();


    //Найти разницу
    const distance = countdownDate - now


        // 1c = 1000мc
        // 1м = 60c
        // 1ч = 60м
        // 1д = 24ч


        //Создаем переменные в милисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //Подсчет для дней, часов, минут и секунд
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

    // Создаем массив для переменных
    const values = [days, hours, minutes, seconds];
    console.log(values);


  // Добавляем значения переменных на страницу
   items.forEach(function (item, index) {
    item.textContent = values[index];
  });

    if (distance < 0){
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Времо вышло</h4>";
    }
}


// Обновления счетчика каждую секунду
let countdown = setInterval(getCountdowmTime, 1000);

// Инициализация текушего времени
getCountdowmTime();
