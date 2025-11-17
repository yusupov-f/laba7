// ===================== Проверка Gmail =====================
const input = document.getElementById('gmail_input');
const button = document.getElementById('gmail_button');
const result = document.getElementById('gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (gmailRegExp.test(value)) {
        result.textContent = 'Почта подтверждена';
        result.style.color = 'green';
    } else {
        result.textContent = 'Почта некорректная';
        result.style.color = 'red';
    }
});


// ===================== Проверка номера телефона =====================
const phoneInput = document.getElementById('phone_input');
const phoneButton = document.getElementById('phone_button');
const phoneResult = document.getElementById('phone_result');

const phoneRegExp = /^(\+7|8)[0-9]{10}$/;

phoneButton.addEventListener('click', () => {
    const value = phoneInput.value.trim();
    if (phoneRegExp.test(value)) {
        phoneResult.textContent = 'Номер правильный';
        phoneResult.style.color = 'green';
    } else {
        phoneResult.textContent = 'Номер неправильный';
        phoneResult.style.color = 'red';
    }
});



// ===================== Проверка ИИН =====================
const iinInput = document.getElementById('iin_input');
const iinButton = document.getElementById('iin_button');
const iinResult = document.getElementById('iin_result');

// ИИН теперь 14 цифр
const iinRegExp = /^[0-9]{14}$/;

iinButton.addEventListener('click', () => {
    const value = iinInput.value.trim();
    if (iinRegExp.test(value)) {
        iinResult.textContent = 'ИИН правильный';
        iinResult.style.color = 'green';
    } else {
        iinResult.textContent = 'ИИН неправильный (должен быть 14 цифр)';
        iinResult.style.color = 'red';
    }
});


// ===================== АНИМАЦИЯ (Home work part 2) =====================
const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

let posX = 0;
let posY = 0;

function moveBlock() {
    const maxX = parent.clientWidth - child.clientWidth;
    const maxY = parent.clientHeight - child.clientHeight;

    const interval = setInterval(() => {
        if (posX < maxX && posY === 0) posX++;
        else if (posX === maxX && posY < maxY) posY++;
        else if (posY === maxY && posX > 0) posX--;
        else if (posX === 0 && posY > 0) posY--;
        else {
            clearInterval(interval);
        }

        child.style.left = posX + 'px';
        child.style.top = posY + 'px';
    }, 5);
}

moveBlock();


// ===================== ТАЙМЕР (Home work 2) =====================
const minutesS = document.getElementById('minutesS');
const secondsS = document.getElementById('secondsS');
const mlSecondsS = document.getElementById('ml-secondsS');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let minutes = 0;
let seconds = 0;
let mlSeconds = 0;
let interval;

function startTimer() {
    if (interval) return; // чтобы таймер не запускался 2 раза

    interval = setInterval(() => {
        mlSeconds++;

        if (mlSeconds >= 100) {
            mlSeconds = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        minutesS.textContent = String(minutes).padStart(2, '0');
        secondsS.textContent = String(seconds).padStart(2, '0');
        mlSecondsS.textContent = String(mlSeconds).padStart(2, '0');
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    mlSeconds = 0;

    minutesS.textContent = "00";
    secondsS.textContent = "00";
    mlSecondsS.textContent = "00";
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
