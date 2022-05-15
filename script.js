const numberButtons = document.querySelector('[data-number]')
const operationButtons = document.querySelector('[data-operator]')
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
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    updateDisplay () {
        this.previousOperand
    }
}
const calculator = new Calculator(dataPreviousButton, dataCurrentButton);

clearButton.addEventListener('click', () => {
    this.clear();
})