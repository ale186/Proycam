const messages = [
    "Hola Cami Feliz Cumpleeeeeee🎂🎂",
    "Gracias por estar siempreee para mi💕",
    "Eres la personita mas bonita que pude haber conocido🥰",
    "Te amo muchiiiisimoooo❣❣❣❣",
    "Me encantan mucho tus ojitoooos peciosoooos💖💖",
    "Hiciste que mi vida se ilumine de nuevo",
    "Siempre te voy a amaaaaar mi vidita❤",
    "Te amo demasiadamente mucho💞",
    "Me gusta mucho ver tu sonrisita tan bonita😍",
    "Espero ver tu sonrisita cuando veas esto🥰",
];
function createTextBubble(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;
    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if(rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `$(newLeft)px`;
        }

        if(rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `$(newTop)px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if(rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);