const quarterlyProgressBar = document.querySelector('.quarterly-progress');
const maxProgressBar = document.querySelector('.max-progress');
const quarterlyProgressText = document.querySelector('.quarterly-progress .progress-text');
const maxProgressText = document.querySelector('.max-progress .progress-text');
const valueInput = document.querySelector('.input');
const maxInput = document.querySelector('.maxInput');
const headingInput = document.querySelector('.headingInput');

// Retrieve stored values from localStorage
const storedValue = localStorage.getItem('value');
const storedMax = localStorage.getItem('max');
const storedHeading = localStorage.getItem('heading');

// Set the input values if stored values exist
if (storedValue !== null && storedMax !== null) {
    valueInput.value = storedValue;
    maxInput.value = storedMax;
}

// Set the heading value if stored value exists
if (storedHeading !== null) {
    headingInput.value = storedHeading;
}

function updateProgressBars() {
    const value = parseInt(valueInput.value);
    const max = parseInt(maxInput.value);

    const quarter = max / 2;
    const quarterlyProgress = Math.min(value / quarter, 1) * 100;
    quarterlyProgressBar.style.width = `${quarterlyProgress}%`;
    quarterlyProgressText.textContent = `${Math.round(quarterlyProgress)}%`;

    const maxProgress = Math.min(value / max, 1) * 100;
    maxProgressBar.style.width = `${maxProgress}%`;
    maxProgressText.textContent = `${Math.round(maxProgress)}%`;

    // Store the current values in localStorage
    localStorage.setItem('value', value);
    localStorage.setItem('max', max);
    localStorage.setItem('heading', headingInput.value);
}

function incrementValue() {
    valueInput.value = parseInt(valueInput.value) + 1;
    updateProgressBars();
}

function decrementValue() {
    valueInput.value = parseInt(valueInput.value) - 1;
    updateProgressBars();
}

function resetValue() {
    valueInput.value = 0;
    updateProgressBars();
}

document.getElementById('incrementBtn').addEventListener('click', incrementValue);
document.getElementById('decrementBtn').addEventListener('click', decrementValue);
document.getElementById('resetBtn').addEventListener('click', resetValue);

// Initial progress bar update
updateProgressBars();
