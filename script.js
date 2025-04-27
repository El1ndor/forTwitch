document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.classList.add("fadeIn");
});

function createFallingStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `-5px`;

    document.querySelector(".stars").appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

setInterval(createFallingStar, Math.random() * 5 + 2);
