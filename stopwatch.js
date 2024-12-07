class Stopwatch {
    constructor() {
        this.display = document.querySelector('.stopwatch-display');
        this.startStopBtn = document.getElementById('start-stop');
        this.resetBtn = document.getElementById('reset');
        
        this.time = 0;
        this.interval = null;
        this.isRunning = false;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.startStopBtn.addEventListener('click', () => this.toggleStartStop());
        this.resetBtn.addEventListener('click', () => this.reset());
    }

    toggleStartStop() {
        if (this.isRunning) {
            this.stop();
        } else {
            this.start();
        }
    }

    start() {
        this.isRunning = true;
        this.startStopBtn.textContent = 'Stop';
        this.startStopBtn.style.backgroundColor = '#dc2626';
        this.interval = setInterval(() => {
            this.time += 10;
            this.updateDisplay();
        }, 10);
    }

    stop() {
        this.isRunning = false;
        this.startStopBtn.textContent = 'Start';
        this.startStopBtn.style.backgroundColor = '';
        clearInterval(this.interval);
    }

    reset() {
        this.stop();
        this.time = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.time / 60000);
        const seconds = Math.floor((this.time % 60000) / 1000);
        const milliseconds = Math.floor((this.time % 1000) / 10);

        this.display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
            .toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }
}

new Stopwatch();