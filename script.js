document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.classList.add("fadeIn");

    // Начинаем падение звёзд
    startFallingStars();
});

function createFallingStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Рандомное начальное положение
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `-10px`; // чуть выше

    // Размер звезды разный
    const size = Math.random() * 3 + 2; // от 2px до 5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    document.querySelector(".stars").appendChild(star);

    // Анимация удаления
    setTimeout(() => {
        star.remove();
    }, 3000); // дольше живут на мобилке
}

function startFallingStars() {
    const isMobile = window.innerWidth <= 768;

    // Скорость появления звёзд
    const minInterval = isMobile ? 1000 : 500;
    const maxInterval = isMobile ? 2500 : 1200;

    function spawnStar() {
        createFallingStar();

        // Новый интервал каждый раз
        const nextTime = Math.random() * (maxInterval - minInterval) + minInterval;
        setTimeout(spawnStar, nextTime);
    }

    spawnStar();
}
