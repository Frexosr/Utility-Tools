class Calculator {
    constructor() {
        this.display = document.querySelector('.calculator-display');
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.querySelectorAll('.calc-btn').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                if (value === 'Clear') {
                    this.clear();
                } else if ('0123456789.'.includes(value)) {
                    this.appendNumber(value);
                } else if (['+', '-', '×', '÷'].includes(value)) {
                    this.setOperator(value);
                } else if (value === '=') {
                    this.calculate();
                }
            });
        });
    }

    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue === '0' ? number : this.currentValue + number;
        this.updateDisplay();
    }

    setOperator(op) {
        if (this.operator !== null) this.calculate();
        this.operator = op;
        this.previousValue = this.currentValue;
        this.currentValue = '0';
    }

    calculate() {
        if (this.operator === null || this.previousValue === null) return;
        
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        let result;

        switch (this.operator) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '×': result = prev * current; break;
            case '÷': result = prev / current; break;
        }

        this.currentValue = result.toString();
        this.operator = null;
        this.previousValue = null;
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.textContent = this.currentValue;
    }
}

new Calculator();