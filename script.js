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
    }

appendNumber(number){
    this.currentOperand = `${this.currentOperand}${number.toString()}`
}

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    updateDisplay () {
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

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})