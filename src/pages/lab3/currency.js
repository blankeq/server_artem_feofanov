console.log(1)
const show = async() => {
    await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((req) => { return req.json(); })
    .then((data) => {
        const list = document.getElementById('currency-list');
        list.innerHTML = '';
        Object.entries(data.Valute).forEach(el => {
            const li = document.createElement('li');  
            const valuteLine = document.createElement('span');
            valuteLine.textContent = el[1].Name + " ==> " + el[1].Value;
            
            li.appendChild(valuteLine);

            list.appendChild(li);
            console.log(el[1].Name)
        });
    })
    .catch((err) => { console.log(err); })
}

(async () => {
    await show();
})()

console.log(2)