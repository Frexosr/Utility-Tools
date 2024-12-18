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
    
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
        this.qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Code" style="max-width: 100%;">`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QRGenerator();
});
