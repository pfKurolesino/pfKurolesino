// Плавный скролл к разделам
const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Если ссылка ведет на другой сайт или страницу, не обрабатываем переход вручную
        if (anchor.getAttribute('href').startsWith("http") || anchor.getAttribute('href') !== "#") {
            return; // Переход будет стандартным
        }

        // Получаем id элемента, на который ссылается якорь
        const targetId = anchor.getAttribute('href').substring(1); // Убираем '#' из href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Прокручиваем страницу до нужного элемента
            targetElement.scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();  // Останавливаем стандартный переход по якорю
        }
    });
});


// Получаем элементы для карусели
const galleryWrapper = document.querySelector('.gallery-wrapper');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const leftButton1 = document.getElementById('left-button1');
const rightButton1 = document.getElementById('right-button1');

// Функция для прокрутки влево
leftButton.addEventListener('click', function () {
    galleryWrapper.scrollBy({
        left: -300,  // Количество пикселей, на которое прокручиваем
        behavior: 'smooth'
    });
});

// Функция для прокрутки вправо
rightButton.addEventListener('click', function () {
    galleryWrapper.scrollBy({
        left: 300,  // Количество пикселей, на которое прокручиваем
        behavior: 'smooth'
    });
});

// Функция для прокрутки влево
leftButton1.addEventListener('click', function () {
    nf=0;
    var localsrc = 0;
    galleryImages.forEach(image=>
    {
        if(image.src==fullscreenImage.src)
        {
                if(localsrc!=0)
                {
                    fullscreenImage.src=localsrc;
                    nf=2;
                }       
        }
        if(nf!=2)localsrc = image.src;
    });
});

// Функция для прокрутки вправо
rightButton1.addEventListener('click', function () {
    nf=0
    galleryImages.forEach(image=>
    {
        if(nf==1)
        {
                fullscreenImage.src=image.src;
                nf=2;       
        }
        if(nf==0 && image.src==fullscreenImage.src)
        {
            nf=1;
        }
    });
});

// Получаем все изображения галереи
const galleryImages = document.querySelectorAll('.gallery-image');

// Получаем элементы модального окна и изображения
const fullscreenModal = document.getElementById('fullscreen-modal');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeModal = document.getElementById('close-modal');

// Открытие изображения в полноэкранном режиме
galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        fullscreenModal.style.display = 'flex'; // Показываем модальное окно
        fullscreenImage.src = image.src; // Устанавливаем источник изображения в модальном окне
    });
});

// Закрытие модального окна при клике на крестик
closeModal.addEventListener('click', function () {
    fullscreenModal.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне изображения
fullscreenModal.addEventListener('click', function (e) {
    if (e.target === fullscreenModal) {
        fullscreenModal.style.display = 'none'; // Закрываем окно, если кликнули вне изображения
    }
});

function goHome()
{
window.scroll({
 top: 0, 
 left: 0, 
 behavior: 'smooth' 
})	
}