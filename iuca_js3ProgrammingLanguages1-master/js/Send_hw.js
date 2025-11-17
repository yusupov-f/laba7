// ===== Элементы =====
const portfolioGrid = document.querySelector('.portfolio_grid');
const addProjectBtn = document.getElementById('addProjectBtn');

// ===== Функция создания карточки проекта =====
function createProjectCard(author, title, desc, img) {
    const card = document.createElement('div');
    card.classList.add('portfolio_card');
    card.innerHTML = `
        <button class="delete_btn">&times;</button>
        <img src="${img || 'https://picsum.photos/300/200?random=' + Math.floor(Math.random()*100)}" alt="${title}">
        <h4>${title}</h4>
        <p><strong>Автор:</strong> ${author}</p>
        <p>${desc}</p>
        <a href="#" class="btn">Посмотреть</a>
    `;

    // ===== Удаление карточки =====
    const deleteBtn = card.querySelector('.delete_btn');
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });

    return card;
}

// ===== Обработчик добавления проекта =====
addProjectBtn.addEventListener('click', () => {
    const author = document.getElementById('projectName').value.trim();
    const title = document.getElementById('projectTitle').value.trim();
    const desc = document.getElementById('projectDesc').value.trim();
    const img = document.getElementById('projectImg').value.trim();

    if (!author || !title || !desc) {
        alert('Введите ФИО, название и описание проекта!');
        return;
    }

    const newCard = createProjectCard(author, title, desc, img);
    portfolioGrid.appendChild(newCard);

    // Очистка полей
    document.getElementById('projectName').value = '';
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectDesc').value = '';
    document.getElementById('projectImg').value = '';
});
