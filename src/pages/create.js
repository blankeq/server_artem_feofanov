document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById('nameContainer');
    const name = document.createElement('h1');
    name.textContent = "Феофанов Артем, 231 группа (2 подгруппа)";
    box.appendChild(name);
})

const button1 = document.getElementById('btn1');
button1.addEventListener('click', () => {
        window.location.href = '/lab1';
});

const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
        window.location.href = '/lab2';
})