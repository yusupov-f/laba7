// ===================== Проверка Gmail =====================
const input = document.getElementById('gmail_input');
const button = document.getElementById('gmail_button');
const result = document.getElementById('gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (gmailRegExp.test(value)) {
        result.textContent = 'Почта верна';
        result.style.color = 'green';
    } else {
        result.textContent = 'Почта не верна';
        result.style.color = 'red';
    }
});

// ===================== Проверка ИИН =====================
const iinInput = document.getElementById('iin_input');
const iinButton = document.getElementById('iin_button');
const iinResult = document.getElementById('iin_result');

const iinRegExp = /^[0-9]{12}$/;

iinButton.addEventListener('click', () => {
    const value = iinInput.value.trim();
    if (iinRegExp.test(value)) {
        iinResult.textContent = 'ИИН верный';
        iinResult.style.color = 'green';
    } else {
        iinResult.textContent = 'ИИН не верный';
        iinResult.style.color = 'red';
    }
});
