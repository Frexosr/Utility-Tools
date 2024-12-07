class QRGenerator {
    constructor() {
        this.input = document.getElementById('qr-text');
        this.qrContainer = document.getElementById('qr-code');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.input.addEventListener('input', () => this.generateQR());
    }

    generateQR() {
        const text = this.input.value.trim();
        if (text === '') {
            this.qrContainer.innerHTML = '<p style="color: #6b7280;">Enter text to generate QR code</p>';
            return;
        }

        // Using Google Charts API for QR code generation
        const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(text)}`;
        this.qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Code">`;
    }
}

new QRGenerator();