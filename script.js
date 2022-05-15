const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const resultButton = document.querySelector('[data-result]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const dataPreviousTextElement = document.querySelector('[data-previous-operand]')
const dataCurrentTextElement = document.querySelector('[data-current-operand]')

class Calculator {
    constructor(dataPreviousTextElement, dataCurrentTextElement) {
        this.dataPreviousTextElement = dataPreviousTextElement;
        this.dataCurrentTextElement = dataCurrentTextElement;
        this.clear()
    }

    formatDisplayNumber(number) {
        const stringNumber = number.toString();

        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];

        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
            });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }


    calculate() {
        let result;

        const _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);

        if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;

        switch (this.operation) {
            case "+":
                result = _previousOperand + _currentOperand;
                break;
            case "-":
                result = _previousOperand - _currentOperand;
                break;
            case "/":
                result = _previousOperand / _currentOperand;
                break;
            case "*":
                result = _previousOperand * _currentOperand;
                break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;

        if (this.previousOperand !== "") {
            this.calculate();
        }

        this.operation = operation;

        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    appendNumber(number) {
        this.currentOperand = `${this.currentOperand}${number.toString()}`
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    updateDisplay() {
        this.dataPreviousTextElement.innerText = this.previousOperand;
        this.dataCurrentTextElement.innerText = this.currentOperand;
    }
}


const calculator = new Calculator(dataPreviousTextElement, dataCurrentTextElement);

for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
}

for (const operationButton of operationButtons) {
    operationButton.addEventListener("click", () => {
        calculator.chooseOperation(operationButton.innerText);
        calculator.updateDisplay();
    });
}

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

resultButton.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});