document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById('nameContainer');
    name.textContent = "Феофанов Артем, 231 группа (2 подгруппа)";
})

const button1 = document.getElementById('btn1');
button1.addEventListener('click', () => {
        window.location.href = '/lab1';
});

const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
        window.location.href = '/lab2';
})