//const clearbox = document.querySelector(".clear").addEventListener("click", () => { clear(); });

class Calculator {
    constructor() {
        this.field = document.getElementById('field');
        this.field.value = '';
        this.initButtons();
    }

    initButtons() {
        const buttons = document.querySelectorAll('.calc button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('clear')) {
                    this.clear();
                } else if (button.classList.contains('rem')) {
                    this.remove();
                } else if (button.classList.contains('equal')) {
                    this.find();
                } else {
                    this.add(button.textContent);
                }
            })
        })
    }

    clear() {
        this.field.value = '';
    }
    
    remove() {
        if (this.field.value == "Ошибка") {
            this.clear(); 
        } else {
            this.field.value = this.field.value.slice(0, -1);
        }      
    }

    add(num) {
        if (this.field.value == 0 && num == '0') {
            return;
        }

        if (this.field.value == "Ошибка" && num == '0') {
            clear();
        }

        if (this.field.value == "Ошибка" || this.field.value == 0) {
            this.field.value = num;    
        } else {
            this.field.value += num;    
        }   
    }

    find() {
        try {
            let evaluated = eval(this.field.value);
            if (evaluated == NaN) {
                alert("Деление на ноль невозможно");
                throw new error;
            }
            if (evaluated == Infinity) {
                alert("Деление на ноль невозможно");
                throw new error;
            }
            if (evaluated == undefined) {
                throw new error;
            }
            this.field.value = evaluated;
        } catch (error) {
            this.field.value = "Ошибка";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
});