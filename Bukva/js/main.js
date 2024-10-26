// Анимация появления логотипов при загрузке страницы
window.addEventListener('load', () => {
    const logos = document.querySelectorAll('.section__clients-logo img');
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('show');
        }, index * 200); // Логотипы появляются с интервалом в 200 мс
    });
});