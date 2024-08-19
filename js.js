const mainContainer = document.querySelector(".main-container");
const container = document.querySelector(".container");
const close = document.querySelector(".close");

const pomodoro = document.querySelector("#pomodoro");
const shortBreak = document.querySelector("#short");
const longBreak = document.querySelector("#long");

const start = document.querySelector(".btn");

const rest = document.querySelector(".rest");
const timer = document.querySelector("#time");

const setting = document.querySelector(".setting");

const new_container = document.querySelector(".new-container");

const inside_container = document.querySelector(".inside-container");

const pomodoro_25 = document.querySelector("#pomodoro_25");
const short_5 = document.querySelector("#short_5");
const long_42 = document.querySelector("#long_42");


const up = document.querySelector(".up");
const down = document.querySelector(".down");

const p1 = document.querySelector(".p1");

const body = document.querySelector(".body");

const A = document.querySelector("#A");
const B = document.querySelector("#B");
const C = document.querySelector("#C");

const red = document.querySelector("#red");
const cyan = document.querySelector("#cyan");
const blue = document.querySelector("#blue");

const apply_btn = document.querySelector(".apply-btn");



let selectedFont = ''; // Variable to store the selected font class
let selectedColor = ''; // Variable to store the selected color

// Event listeners to store the selected color
red.addEventListener("click", () => {
    selectedColor = 'rd'; // Set to rd when red is clicked
});

cyan.addEventListener("click", () => {
    selectedColor = 'cy'; // Set to cy when cyan is clicked
});

blue.addEventListener("click", () => {
    selectedColor = 'bl'; // Set to bl when blue is clicked
});

// Event listeners to store the selected font
A.addEventListener("click", () => {
    selectedFont = 'font-a'; // Set to font-a when A is clicked
});

B.addEventListener("click", () => {
    selectedFont = 'font-b'; // Set to font-b when B is clicked
});

C.addEventListener("click", () => {
    selectedFont = 'font-c'; // Set to font-c when C is clicked
});

// Event listener for the Apply button
apply_btn.addEventListener("click", () => {
    body.className = ''; // Clear existing classes from the main container
    if (selectedColor) {
        body.classList.add(selectedColor); // Apply the selected color class
    }
    if (selectedFont) {
        mainContainer.classList.add(selectedFont); // Apply the selected font class
    }
});

 

let timeId;
let minutes = 25;
let seconds = 0;

start.addEventListener("click", () => {
    timeId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            clearInterval(timeId);
            minutes = 25;
            seconds = 0;
        }
        timer.innerHTML = `${minutes}:${seconds}`

        rest.addEventListener("click", () => {
            clearInterval(timeId);
            minutes = 25;
            seconds = 0;
            timer.innerHTML = `${minutes}:0${seconds}`
        })
    }, 125);
});


pomodoro.addEventListener("click", () => {
    timeId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            clearInterval(timeId);
            minutes = 25;
            seconds = 0;
        }
        timer.innerHTML = `${minutes}:${seconds}`

        rest.addEventListener("click", () => {
            clearInterval(timeId);
            minutes = 25;
            seconds = 0;
            timer.innerHTML = `${minutes}:0${seconds}`
        })
    }, 125);
})



shortBreak.addEventListener("click", () => {
    minutes = 5;
    seconds = 0;
    timeId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            clearInterval(timeId);
            minutes = 25;
            seconds = 0;
        }
        timer.innerHTML = `${minutes}:${seconds}`

        rest.addEventListener("click", () => {
            clearInterval(timeId);
            minutes = 5;
            seconds = 0;
            timer.innerHTML = `${minutes}:0${seconds}`
        })
    }, 125);
})



longBreak.addEventListener("click", () => {
    minutes = 42;
    seconds = 0;
    timeId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            clearInterval(timeId);
            minutes = 25;
            seconds = 0;
        }
        timer.innerHTML = `${minutes}:${seconds}`

        rest.addEventListener("click", () => {
            clearInterval(timeId);
            minutes = 42;
            seconds = 0;
            timer.innerHTML = `${minutes}:0${seconds}`
        })
    }, 125);
})




setting.addEventListener("click", () => {
    new_container.classList.add("show");
})

close.addEventListener("click", () => {
    new_container.classList.remove("show");
})





// Helper function to update the timer display
function updateDisplay() {
    if (seconds < 10) {
        secondsDisplay = '0' + seconds;
    } else {
        secondsDisplay = seconds;
    }
    
    timer.innerHTML = minutes + ':' + secondsDisplay;
}

// Clear existing timer and reset values
function resetTimer() {
    clearInterval(timeId);
    updateDisplay();
}

// Adjust time values
function adjustTime(adjustment) {
    if (adjustment === 'up' && minutes < 60) {
        minutes++;
    } else if (adjustment === 'down' && minutes > 1) {
        minutes--;
    }
    updateDisplay();
}

// Initialize event listeners
function initializeEventListeners() {
    up.addEventListener("click", () => adjustTime('up'));
    down.addEventListener("click", () => adjustTime('down'));

    apply_btn.addEventListener("click", () => {
        new_container.classList.remove("show");
        resetTimer();
        timeId = setInterval(() => {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                clearInterval(timeId);
                minutes = 25;
                seconds = 0;
            }
            updateDisplay();

            rest.addEventListener("click", () => {
                clearInterval(timeId);
                minutes = 25; // Reset to default or use specific value
                seconds = 0;
                updateDisplay();
            });
        }, 1000); // Update every second
    });
}

initializeEventListeners(); 