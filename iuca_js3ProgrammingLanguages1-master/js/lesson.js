// ===================== Проверка номера Кыргызстан =====================
const kgPhoneInput = document.getElementById('kg_phone_input');
const kgPhoneButton = document.getElementById('kg_phone_button');
const kgPhoneResult = document.getElementById('kg_phone_result');

// Формат: +996 550 64-47-72
const kgRegExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

kgPhoneButton.addEventListener('click', () => {
    const value = kgPhoneInput.value.trim();
    if (kgRegExp.test(value)) {
        kgPhoneResult.textContent = '✅ Номер Кыргызстана верный';
        kgPhoneResult.style.color = 'green';
        kgPhoneInput.style.border = '2px solid green';
    } else {
        kgPhoneResult.textContent = '❌ Номер Кыргызстана не верный';
        kgPhoneResult.style.color = 'red';
        kgPhoneInput.style.border = '2px solid red';
    }
});

// ===================== Проверка номера России =====================
const ruPhoneInput = document.getElementById('ru_phone_input');
const ruPhoneButton = document.getElementById('ru_phone_button');
const ruPhoneResult = document.getElementById('ru_phone_result');

// Формат: +7XXXXXXXXXX или 8XXXXXXXXXX
const ruRegExp = /^(\+7|8)[0-9]{10}$/;

ruPhoneButton.addEventListener('click', () => {
    const value = ruPhoneInput.value.trim();
    if (ruRegExp.test(value)) {
        ruPhoneResult.textContent = '✅ Номер России верный';
        ruPhoneResult.style.color = 'green';
        ruPhoneInput.style.border = '2px solid green';
    } else {
        ruPhoneResult.textContent = '❌ Номер России не верный';
        ruPhoneResult.style.color = 'red';
        ruPhoneInput.style.border = '2px solid red';
    }
});
