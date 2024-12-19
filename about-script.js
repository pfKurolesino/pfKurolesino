// Получаем элементы формы и кнопки
const calculatorForm = document.getElementById('product-calculator');
const calculateButton = document.getElementById('calculate-button');
const totalCostElement = document.getElementById('total-cost');

// Цены на продукты
const prices = {
    eggs_c0: 50,
    eggs_c1: 40,
};

// Обработчик события для кнопки "Рассчитать"
calculateButton.addEventListener('click', function () {
    // Получаем значения из полей ввода
    const eggs_c0 = parseInt(calculatorForm.eggs_c0.value) || 0;
    const eggs_c1 = parseInt(calculatorForm.eggs_c1.value) || 0;
    const chickens = parseInt(calculatorForm.chickens.value) || 0;

    const getChickenPrice = (chickens) => {
        if (chickens <= 50) return 70;
        if (chickens <= 100) return 60;
        if (chickens <= 200) return 50;
        return chickens <= 500 ? 45 : 40;
    };
    
    // Рассчитываем общую стоимость
    const totalCost =
    eggs_c0 * prices.eggs_c0 +
    eggs_c1 * prices.eggs_c1 +
    chickens * getChickenPrice(chickens);

    // Обновляем отображение общей стоимости
    totalCostElement.textContent = `₽${totalCost}`;
});

function goHome()
{
window.location.replace("index.html");
window.scroll({
 top: 0, 
 left: 0, 
 behavior: 'smooth' 
})	
}