'use strict'
const containerDays = document.querySelector('.countDay'),
    containerHours = document.querySelector('.countHour'),
    containerMinute = document.querySelector('.countMinute'),
    containerSecond = document.querySelector('.countSecond'),
    textD = document.querySelector('.textD'),
    textH = document.querySelector('.textH'),
    textM = document.querySelector('.textM'),
    textS = document.querySelector('.textS');


    
const intervalId=setInterval(() => {
    countdown()
}, (1000));

function countdown() {
    const deadline = new Date(2022, 1, 5, 0, 0, 0, 0);
    const remainingTime = deadline - new Date();
    if (remainingTime > 0) {

        function declOfNum(number, titles) {
            const cases = [2, 0, 1, 1, 1, 2];
            return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
        }

        function getZero(number) {
            if (number > 0 && number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        }

        const days = ['день', 'дня', 'дней'],
            day = remainingTime > 0 ? Math.floor(remainingTime / 1000 / 60 / 60 / 24) : 0,
            declinationD = declOfNum(day, days);

        const hours = ['час', 'часа', 'часов'],
            hour = remainingTime > 0 ? Math.floor(remainingTime / 1000 / 60 / 60) % 24 : 0,
            declinationH = declOfNum(hour, hours);

        const minutes = ['минута', 'минуты', 'минут'],
            minute = remainingTime > 0 ? Math.floor(remainingTime / 1000 / 60) % 60 : 0,
            declinationM = declOfNum(minute, minutes);

        const seconds = ['секунда', 'секунды', 'секунд'],
            second = remainingTime > 0 ? Math.floor(remainingTime / 1000) % 60 : 0,
            declinationS = declOfNum(second, seconds);
        containerDays.innerHTML = `${day}`;
        containerHours.innerHTML = getZero(hour);
        containerMinute.innerHTML = getZero(minute);
        containerSecond.innerHTML = getZero(second);
        textD.innerHTML = `${declinationD}`
        textH.innerHTML = `${declinationH}`
        textM.innerHTML = `${declinationM}`
        textS.innerHTML = `${declinationS}`
    } else {
        clearInterval(intervalId)
        document.querySelector(".timer").innerHTML = "Время закончилось";
        document.querySelector(".timer").style.fontSize = '50px';
        document.querySelector(".timer").style.color = 'rgb(243, 241, 234)';
    }
}













