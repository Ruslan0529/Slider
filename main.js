// Получаем все точки, стрелки и ссылки
let points = [document.querySelector('#point1'), document.querySelector('#point2'), document.querySelector('#point3')];
let links = [document.querySelector('#link1'), document.querySelector('#link2'), document.querySelector('#link3')];
let arrowNext = document.getElementById('next');
let arrowBack = document.getElementById('prev');

let textCity = document.getElementById('city');
let textPlace = document.getElementById('place');
let textApartmentArea = document.getElementById('apartment-area');
let textRepairTime = document.getElementById('repair-time');
let cityTexts = ["Rostov-on-Don", "Rostov-on-Don", "Sochi"];
let placeTexts = ["LCD Admiral", "Patriotic", "Thieves"];
let apartmentAreaTexts = ["81 m2", "93 m2", "105 m2"];
let repairTimeTexts = ["3.5 months", "3 months", "4 months"];

let imageElement = document.getElementById('image');
let imageUrls = [
    "image 2.1.png",
    "image 3.png",
    "image 2.png"
];

// Устанавливаем начальный индекс
let currentIndex = 0;

// Функция для обновления точек и ссылок
function updatePointsAndLinks() {
    points.forEach((point, index) => {
        point.style.fill = index === currentIndex ? 'white' : 'white';
        point.style.fillOpacity = index === currentIndex ? '1' : '0.3';
    });
    links.forEach((link, index) => {
        if (index === currentIndex) {
            link.style.color = '#e3b873'; // Измените цвет на #e3b873
            link.style.textDecoration = 'underline'; // Добавьте подчеркивание
        } else {
            link.style.color = ''; // Сбросьте цвет
            link.style.textDecoration = ''; // Удалите подчеркивание
        }
    });
    // Обновляем текст
    textCity.textContent = cityTexts[currentIndex];
    textPlace.textContent = placeTexts[currentIndex];
    textApartmentArea.textContent = apartmentAreaTexts[currentIndex];
    textRepairTime.textContent = repairTimeTexts[currentIndex];
    // Обновляем изображение
       imageElement.src = imageUrls[currentIndex];
}

// Обработчики событий для стрелок
arrowNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % points.length;
    updatePointsAndLinks();
});

arrowBack.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + points.length) % points.length;
    updatePointsAndLinks();
});

// Добавляем обработчики событий для каждой точки и ссылки
points.forEach((point, index) => {
    point.addEventListener('click', () => {
        currentIndex = index;
        updatePointsAndLinks();
    });
});
links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // предотвращаем переход по ссылке
        currentIndex = index;
        updatePointsAndLinks();
    });
});

// Обновляем точки и ссылки в начале
updatePointsAndLinks();
