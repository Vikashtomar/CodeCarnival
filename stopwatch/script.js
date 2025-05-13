
        let timer;
        let elapsedTime = 0;

        function formatTime(ms) {
            const date = new Date(ms);
            return date.toISOString().substr(11, 8);
        }

        function updateDisplay() {
            document.getElementById('time').textContent = formatTime(elapsedTime);
        }

        document.getElementById('start').addEventListener('click', () => {
            if (!timer) {
                timer = setInterval(() => {
                    elapsedTime += 1000;
                    updateDisplay();
                }, 1000);
            }
        });

        document.getElementById('stop').addEventListener('click', () => {
            clearInterval(timer);
            timer = null;
        });

        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(timer);
            timer = null;
            elapsedTime = 0;
            updateDisplay();
        });
        updateDisplay();
        document.getElementById('time').textContent = formatTime(elapsedTime);
        document.getElementById('start').addEventListener('click', () => {
            if (!timer) {
                timer = setInterval(() => {
                    elapsedTime += 1000;
                    updateDisplay();
                }, 1000);
            }
        });
    