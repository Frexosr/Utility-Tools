class PasswordGenerator {
    constructor() {
        this.lengthSlider = document.getElementById('password-length');
        this.lengthValue = document.getElementById('length-value');
        this.includeNumbers = document.getElementById('include-numbers');
        this.includeSymbols = document.getElementById('include-symbols');
        this.generateBtn = document.getElementById('generate-password');
        this.output = document.getElementById('password-output');
        this.copyBtn = document.getElementById('copy-password');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.lengthSlider.addEventListener('input', () => {
            this.lengthValue.textContent = this.lengthSlider.value;
        });

        this.generateBtn.addEventListener('click', () => this.generatePassword());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    generatePassword() {
        const length = parseInt(this.lengthSlider.value);
        const useNumbers = this.includeNumbers.checked;
        const useSymbols = this.includeSymbols.checked;

        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let chars = letters;
        if (useNumbers) chars += numbers;
        if (useSymbols) chars += symbols;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        this.output.value = password;
    }

    async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(this.output.value);
            this.copyBtn.textContent = '✓';
            setTimeout(() => this.copyBtn.textContent = '📋', 1000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }
}

new PasswordGenerator();