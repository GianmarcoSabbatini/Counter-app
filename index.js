// Create element using DOM manipulation
const content = document.getElementById('content'); 

const counterDisplay = document.createElement('div');
counterDisplay.id = 'counter';
counterDisplay.textContent = '0';

const decrementButton = document.createElement('button');
decrementButton.textContent = '-';

const resetButton = document.createElement('button');
resetButton.textContent ="reset";

const incrementButton = document.createElement('button');
incrementButton.textContent = '+';



// Add element to the DOM
content.appendChild(counterDisplay);
content.appendChild(decrementButton);
content.appendChild(resetButton);
content.appendChild(incrementButton);


// Set counter to 0
let counter = 0;

// Function to increment, decrement or reset the counter using the buttons or the keyboard
incrementButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

decrementButton.addEventListener('click', () => {
    if (counter == 0) {
        alert("non può essere in negativo");
    }
    else {counter--;
    counterDisplay.textContent = counter;}
    
});

resetButton.addEventListener("click", () => {
    counter = 0;
    counterDisplay.textContent = counter;
});

addEventListener("keydown", function(event) {
    switch (event.key) {
        case "+":
            counter++;
            counterDisplay.textContent = counter;
            break;
        case "-":
            if (counter > 0) {
                counter--;
                counterDisplay.textContent = counter;
            } else {
                alert('Non può essere in negativo!');
            }
            break;
        case "Enter":
            counter = 0;
            counterDisplay.textContent = counter;
            break;
    }
});


// Switch between dark and light mode
const switchModeButton = document.getElementById('switchMode');

switchModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
