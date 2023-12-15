let tg = window.Telegram.WebApp;

tg.expand();

document.addEventListener('DOMContentLoaded', function() {
    const findRoomBtn = document.getElementById('find-room-btn');
    const createRoomBtn = document.getElementById('create-room-btn');
    const addCoinsBtn = document.getElementById('add-coins-btn');
    const roomList = document.getElementById('room-list');
    const createRoomMenu = document.getElementById('create-room-menu');
    const gameSelect = document.getElementById('game-select');
    const currencySelect = document.getElementById('currency-select');
    const betInput = document.getElementById('bet-input');
    const createBtn = document.getElementById('create-btn');
    const coinCount = document.getElementById('coin-count');

    // Обработчики событий для кнопок
    findRoomBtn.addEventListener('click', function() {
        // Здесь можно добавить логику для отображения списка комнат с игрой
        roomList.style.display = 'block';
    });

    createRoomBtn.addEventListener('click', function() {
        // Здесь можно добавить логику для отображения меню создания комнаты
        createRoomMenu.style.display = 'block';
    });

    addCoinsBtn.addEventListener('click', function() {
        // Здесь можно добавить логику для пополнения монеток
        // Показываем, что монетки были пополнены
        coinCount.innerText = '❇️ монеток';
    });

    createBtn.addEventListener('click', function() {
        // Здесь можно добавить логику для создания комнаты с выбранными параметрами
        // Показываем, что комната была создана
        alert('Комната была создана! ✅');
    });
});

