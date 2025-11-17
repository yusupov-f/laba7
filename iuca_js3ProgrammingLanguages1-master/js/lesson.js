// ===================== Проверка номера Кыргызстан =====================
const kgPhoneInput = document.querySelector('#kg_phone_input');
const kgPhoneButton = document.querySelector('#kg_phone_button');
const kgPhoneResult = document.querySelector('#kg_phone_result');

const kgRegExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

kgPhoneButton.addEventListener('click', () => {
    const value = kgPhoneInput.value.trim();
    if (kgRegExp.test(value)) {
        kgPhoneResult.textContent = '✅ Этот номер существует (Кыргызстан)';
        kgPhoneResult.style.color = 'green';
    } else {
        kgPhoneResult.textContent = '❌ Этот номер не существует (Кыргызстан)';
        kgPhoneResult.style.color = 'red';
    }
});

// ===================== Проверка номера Россия =====================
const ruPhoneInput = document.querySelector('#ru_phone_input');
const ruPhoneButton = document.querySelector('#ru_phone_button');
const ruPhoneResult = document.querySelector('#ru_phone_result');

const ruRegExp = /^(\+7|8) ?\d{3} ?\d{3}-\d{2}-\d{2}$/;

ruPhoneButton.addEventListener('click', () => {
    const value = ruPhoneInput.value.trim();
    if (ruRegExp.test(value)) {
        ruPhoneResult.textContent = '✅ Этот номер существует (Россия)';
        ruPhoneResult.style.color = 'green';
    } else {
        ruPhoneResult.textContent = '❌ Этот номер не существует (Россия)';
        ruPhoneResult.style.color = 'red';
    }
});

// ===================== TAB SLIDER =====================
const tabs = document.querySelectorAll('.tab_item');
const contents = document.querySelectorAll('.tab_content_block');
let current = 0;

function showTab(index) {
    contents.forEach((c, i) => c.classList.toggle('active', i === index));
    tabs.forEach((t, i) => t.classList.toggle('active', i === index));
    current = index;
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        showTab(i);
        resetAutoSlide();
    });
});

// Автопереключение каждые 4 секунды
let autoSlide = setInterval(() => {
    let next = (current + 1) % contents.length;
    showTab(next);
}, 4000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        let next = (current + 1) % contents.length;
        showTab(next);
    }, 4000);
}

// ===================== CONVERTER (Som ↔ USD ↔ EUR) =====================
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const somToUsd = 0.012; // 1 SOM → USD
const somToEur = 0.011; // 1 SOM → EUR

function convertFromSom() {
    const som = parseFloat(somInput.value) || 0;
    usdInput.value = (som * somToUsd).toFixed(2);
    eurInput.value = (som * somToEur).toFixed(2);
}

function convertFromUsd() {
    const usd = parseFloat(usdInput.value) || 0;
    const som = usd / somToUsd;
    somInput.value = som.toFixed(2);
    eurInput.value = (som * somToEur).toFixed(2);
}

function convertFromEur() {
    const eur = parseFloat(eurInput.value) || 0;
    const som = eur / somToEur;
    somInput.value = som.toFixed(2);
    usdInput.value = (som * somToUsd).toFixed(2);
}

somInput.addEventListener('input', convertFromSom);
usdInput.addEventListener('input', convertFromUsd);
eurInput.addEventListener('input', convertFromEur);

// ===================== CARD SWITCHER С АНИМАЦИЕЙ =====================
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const card = document.querySelector('.card');

let cardIndex = 0;
const cards = [
    "Карточка 1: Пример текста",
    "Карточка 2: Второй пример",
    "Карточка 3: Третий пример"
];

let isAnimating = false;

function showCard(newIndex, direction) {
    if (isAnimating) return;
    isAnimating = true;

    const oldCard = card.cloneNode(true);
    oldCard.style.position = "absolute";
    oldCard.style.left = "0";
    oldCard.style.top = "0";
    oldCard.style.width = "500px";
    oldCard.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    oldCard.style.zIndex = "1";

    card.parentNode.appendChild(oldCard);

    card.querySelector('p').textContent = cards[newIndex];
    card.style.transition = "none";
    card.style.transform = `translateX(${direction === 'next' ? '500px' : '-500px'})`;
    card.style.opacity = "0";
    card.style.zIndex = "2";

    setTimeout(() => {
        card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        card.style.transform = "translateX(0)";
        card.style.opacity = "1";

        oldCard.style.transform = `translateX(${direction === 'next' ? '-500px' : '500px'})`;
        oldCard.style.opacity = "0";

        setTimeout(() => {
            oldCard.remove();
            isAnimating = false;
        }, 500);
    }, 50);

    cardIndex = newIndex;
}

btnNext.addEventListener('click', () => {
    const nextIndex = (cardIndex + 1) % cards.length;
    showCard(nextIndex, 'next');
});

btnPrev.addEventListener('click', () => {
    const prevIndex = (cardIndex - 1 + cards.length) % cards.length;
    showCard(prevIndex, 'prev');
});

// Инициализация
card.querySelector('p').textContent = cards[cardIndex];
 
const apiKey = "YOUR_API_KEY"; // Вставь свой ключ OpenWeatherMap
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityNameEl = document.querySelector('.city_name');
const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');

function getWeather() {
    const city = cityInput.value.trim();
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=ru`)
        .then(response => {
            if (!response.ok) throw new Error("Город не найден");
            return response.json();
        })
        .then(data => {
            cityNameEl.textContent = `Город: ${data.name}`;
            temperatureEl.textContent = `Температура: ${Math.round(data.main.temp)}°C`;
            descriptionEl.textContent = `Состояние: ${data.weather[0].description}`;
        })
        .catch(err => {
            cityNameEl.textContent = "Город не найден";
            temperatureEl.textContent = "";
            descriptionEl.textContent = "";
        });
}

getWeatherBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getWeather();
});
