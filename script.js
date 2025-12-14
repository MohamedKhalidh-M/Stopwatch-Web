// Stopwatch Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;
let lapCounter = 0;
let laps = [];

// DOM Elements
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const clearLapsBtn = document.getElementById('clearLapsBtn');

const lapsList = document.getElementById('lapsList');
const statsContainer = document.getElementById('statsContainer');
const progressCircle = document.getElementById('progressCircle');

// Button Event Listeners
startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);
clearLapsBtn.addEventListener('click', clearLaps);

// Start Stopwatch
function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;
        
        // Update button states
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = false;
        lapBtn.disabled = false;
        
        // Add visual feedback
        startBtn.style.opacity = '0.5';
        pauseBtn.style.opacity = '1';
    }
}

// Pause Stopwatch
function pauseStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        
        // Update button states
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        
        // Add visual feedback
        startBtn.style.opacity = '1';
        pauseBtn.style.opacity = '0.5';
    }
}

// Reset Stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    lapCounter = 0;
    
    // Reset display
    updateDisplay(0, 0, 0, 0);
    
    // Update button states
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;
    
    // Reset button opacity
    startBtn.style.opacity = '1';
    pauseBtn.style.opacity = '0.5';
    resetBtn.style.opacity = '0.5';
    lapBtn.style.opacity = '0.5';
    
    // Reset progress circle
    updateProgressCircle(0);
}

// Update Time
function updateTime() {
    elapsedTime = Date.now() - startTime;
    
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    
    updateDisplay(hours, minutes, seconds, milliseconds);
    updateProgressCircle(seconds);
}

// Update Display
function updateDisplay(hours, minutes, seconds, milliseconds) {
    hoursDisplay.textContent = pad(hours);
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(milliseconds);
}

// Pad Numbers
function pad(number) {
    return number < 10 ? '0' + number : number;
}

// Update Progress Circle
function updateProgressCircle(seconds) {
    const circumference = 2 * Math.PI * 90; // radius = 90
    const progress = (seconds / 60) * circumference;
    const offset = circumference - progress;
    progressCircle.style.strokeDashoffset = offset;
}

// Record Lap Time
function recordLap() {
    if (!isRunning && elapsedTime === 0) return;
    
    lapCounter++;
    const lapTime = elapsedTime;
    const lapTimeFormatted = formatTime(lapTime);
    
    // Calculate difference from previous lap
    let lapDiff = '';
    let lapDiffClass = '';
    
    if (laps.length > 0) {
        const previousLapTime = laps[laps.length - 1].time;
        const diff = lapTime - previousLapTime;
        const diffFormatted = formatTime(Math.abs(diff));
        
        if (diff > 0) {
            lapDiff = '+' + diffFormatted;
            lapDiffClass = 'slower';
        } else if (diff < 0) {
            lapDiff = '-' + diffFormatted;
            lapDiffClass = 'faster';
        } else {
            lapDiff = diffFormatted;
        }
    }
    
    // Store lap data
    laps.push({
        number: lapCounter,
        time: lapTime,
        formatted: lapTimeFormatted,
        diff: lapDiff,
        diffClass: lapDiffClass
    });
    
    // Update UI
    displayLaps();
    updateStatistics();
    
    // Enable clear button
    clearLapsBtn.disabled = false;
}

// Display Laps
function displayLaps() {
    // Clear existing laps or no-laps message
    lapsList.innerHTML = '';
    
    // Find fastest and slowest laps
    let fastestIndex = -1;
    let slowestIndex = -1;
    let fastestTime = Infinity;
    let slowestTime = -1;
    
    laps.forEach((lap, index) => {
        if (lap.time < fastestTime) {
            fastestTime = lap.time;
            fastestIndex = index;
        }
        if (lap.time > slowestTime) {
            slowestTime = lap.time;
            slowestIndex = index;
        }
    });
    
    // Display laps in reverse order (newest first)
    for (let i = laps.length - 1; i >= 0; i--) {
        const lap = laps[i];
        const lapItem = document.createElement('div');
        lapItem.className = 'lap-item';
        
        // Add fastest/slowest class
        if (i === fastestIndex && laps.length > 1) {
            lapItem.classList.add('fastest');
        }
        if (i === slowestIndex && laps.length > 1) {
            lapItem.classList.add('slowest');
        }
        
        lapItem.innerHTML = `
            <div class="lap-number">Lap ${lap.number}</div>
            <div class="lap-time">${lap.formatted}</div>
            <div class="lap-diff ${lap.diffClass}">${lap.diff || '--'}</div>
        `;
        
        lapsList.appendChild(lapItem);
    }
}

// Clear All Laps
function clearLaps() {
    laps = [];
    lapCounter = 0;
    
    // Reset display
    lapsList.innerHTML = `
        <div class="no-laps">
            <i class="fas fa-flag-checkered"></i>
            <p>No lap times recorded yet</p>
            <p class="hint">Click "Lap" button to record times</p>
        </div>
    `;
    
    // Hide statistics
    statsContainer.style.display = 'none';
    
    // Disable clear button
    clearLapsBtn.disabled = true;
}

// Update Statistics
function updateStatistics() {
    if (laps.length === 0) {
        statsContainer.style.display = 'none';
        return;
    }
    
    // Show statistics container
    statsContainer.style.display = 'block';
    
    // Calculate statistics
    const times = laps.map(lap => lap.time);
    const fastest = Math.min(...times);
    const slowest = Math.max(...times);
    const average = times.reduce((a, b) => a + b, 0) / times.length;
    
    // Update statistics display
    document.getElementById('fastestLap').textContent = formatTime(fastest);
    document.getElementById('slowestLap').textContent = formatTime(slowest);
    document.getElementById('averageLap').textContent = formatTime(average);
    document.getElementById('totalLaps').textContent = laps.length;
}

// Format Time
function formatTime(ms) {
    const milliseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));
    
    if (hours > 0) {
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
    } else if (minutes > 0) {
        return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
    } else {
        return `${pad(seconds)}.${pad(milliseconds)}`;
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Space bar - Start/Pause
    if (e.code === 'Space') {
        e.preventDefault();
        if (!isRunning && !startBtn.disabled) {
            startStopwatch();
        } else if (isRunning && !pauseBtn.disabled) {
            pauseStopwatch();
        }
    }
    
    // R key - Reset
    if (e.key === 'r' || e.key === 'R') {
        if (!resetBtn.disabled) {
            resetStopwatch();
        }
    }
    
    // L key - Lap
    if (e.key === 'l' || e.key === 'L') {
        if (!lapBtn.disabled) {
            recordLap();
        }
    }
    
    // C key - Clear laps
    if (e.key === 'c' || e.key === 'C') {
        if (!clearLapsBtn.disabled) {
            clearLaps();
        }
    }
});

// Initialize
console.log('🕐 Stopwatch Ready!');
console.log('Keyboard Shortcuts:');
console.log('- Space: Start/Pause');
console.log('- R: Reset');
console.log('- L: Lap');
console.log('- C: Clear Laps');
