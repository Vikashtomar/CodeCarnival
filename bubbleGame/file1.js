var timer = 20;
let score = 0;
let hitLetter = '';

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Get a new random letter
function getNewHit() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    hitLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    document.querySelector("#hitval").textContent = hitLetter;
}

function makeBubble() {
    let clutter = '';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 1; i <= 80; i++) {
        let rn = letters.charAt(Math.floor(Math.random() * letters.length));
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

// Run timer function with setInterval
function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
            document.querySelector("#hitval").innerHTML = '';
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let clickedVal = dets.target.textContent.trim();
    if (clickedVal === hitLetter) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

runTimer();
makeBubble();
getNewHit();
