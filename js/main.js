document.addEventListener('DOMContentLoaded', function () {
    var page1 = document.querySelector('#page1');
    var page2 = document.querySelector('#page2');

    var questionOne = document.querySelector('.question-one');
    var questionTwo = document.querySelector('.question-two');
    var questionThree = document.querySelector('.question-three');
    var questionFour = document.querySelector('.question-four');

    var btnOne = document.querySelector('.btn-one');
    var btnTwo = document.querySelector('.btn-two');
    var btnThree = document.querySelector('.btn-three');
    var btnFour = document.querySelector('.btn-four');

    btnOne.addEventListener('click', function () {
        questionOne.classList.add('d-none');

        questionTwo.classList.remove('d-none');
        questionTwo.classList.add('animation-right');
    });

    btnTwo.addEventListener('click', function () {
        questionTwo.classList.add('d-none');
        questionTwo.classList.remove('animation-right');

        questionThree.classList.add('animation-right');
        questionThree.classList.remove('d-none');
    });

    btnThree.addEventListener('click', function () {
        questionThree.classList.add('d-none');
        questionThree.classList.remove('animation-right');

        questionFour.classList.add('animation-right');
        questionFour.classList.remove('d-none');
    });

     btnFour.addEventListener('click', function () {
         page1.classList.add('d-none');
         page2.classList.remove('d-none');
         page2.classList.add('animation-page');
     });
});

const years = document.getElementById('years');
const months = document.getElementById('months');
const weeks = document.getElementById('weeks');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
// const newYearTime = new Date(currentYear + 1, 01, 01);

function update() {
    const yEnter = 2019;
    const mEnter = 11;
    const dEnter = 16;
    const newYearTime = new Date(yEnter, mEnter, dEnter);
    const currentTime = new Date();
    const diff = currentTime - newYearTime + 14*24*60*60*1000;
    updateCountdownTime(diff, years, months, days, hours, minutes, seconds);
}

function updateCountdownTime(
    diff,
    years,
    months,
    days,
    hours,
    minutes,
    seconds
) {
    const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);
    const mo = Math.floor(diff / 1000 / 60 / 60 / 24 / 30) % 12;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    years.innerHTML = y < 10 ? '0' + y : y;
    months.innerHTML = mo < 10 ? '0' + mo : mo;
    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(update, 1000);
