//Created by JaHIN
function createFallingSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄️';
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-50px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;

    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationiteration', () => {
        snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
    });

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform: translateY(${window.innerHeight}px) rotate(360deg);
    }
}
`;
document.head.appendChild(style);

let snowflakeInterval = setInterval(createFallingSnowflake, 300);

window.addEventListener('blur', () => {
    clearInterval(snowflakeInterval);
});

window.addEventListener('focus', () => {
    if (!snowflakeInterval) {
        snowflakeInterval = setInterval(createFallingSnowflake, 300);
    }
});
