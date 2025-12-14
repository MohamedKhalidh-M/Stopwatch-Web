# ⏱️ Stopwatch Web Application

A modern, feature-rich stopwatch web application built with HTML, CSS, and JavaScript. Track time intervals with precision, record lap times, and view detailed statistics.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Overview

This stopwatch application provides an intuitive and visually appealing interface for measuring and recording time intervals. It features start, pause, reset, and lap functionality with real-time statistics and a beautiful gradient design.

## ✨ Features

### ⏰ Core Stopwatch Functions
- **Start/Pause:** Begin and pause time tracking
- **Reset:** Clear the stopwatch and return to 00:00:00
- **Lap Times:** Record multiple lap times during a session
- **High Precision:** Tracks time to 1/100th of a second (10ms intervals)

### 📊 Advanced Features
- **Lap Statistics:**
  - Fastest lap time
  - Slowest lap time
  - Average lap time
  - Total number of laps
- **Visual Indicators:**
  - Fastest lap highlighted in green
  - Slowest lap highlighted in red
  - Lap time differences displayed
- **Progress Ring:** Animated circular progress indicator
- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Keyboard Shortcuts:** Control the stopwatch with keyboard

### 🎨 User Interface
- Modern gradient background
- Glass morphism design
- Smooth animations and transitions
- Real-time time display (Hours:Minutes:Seconds:Milliseconds)
- Scrollable lap times list
- Clear and intuitive controls

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with modern features:
  - CSS Grid and Flexbox layouts
  - Gradient backgrounds
  - Animations and transitions
  - Glass morphism effects
  - Custom scrollbar styling
- **JavaScript (ES6+)** - Functionality:
  - Date and time calculations
  - DOM manipulation
  - Event handling
  - Array methods for statistics
  - Keyboard event listeners

## 📁 Project Structure

```
PRODIGY_WD_TASK2/
│
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Installation & Usage

### Quick Start

1. **Clone or Download**
   ```bash
   git clone https://github.com/Mohammedrafiullah1928/PRODIGY_WD_TASK1.git
   cd PRODIGY_WD_TASK1/PRODIGY_WD_TASK2
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required

3. **Start Using**
   - Click "Start" to begin timing
   - Click "Lap" to record lap times
   - Click "Pause" to pause the timer
   - Click "Reset" to clear and start over

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Start/Pause |
| **R** | Reset |
| **L** | Record Lap |
| **C** | Clear Laps |

## 💡 How It Works

### Time Tracking
The stopwatch uses JavaScript's `Date.now()` for high-precision time tracking:
```javascript
startTime = Date.now() - elapsedTime;
timerInterval = setInterval(updateTime, 10); // Updates every 10ms
```

### Lap Time Recording
Laps are stored with timestamps and compared to calculate differences:
```javascript
laps.push({
    number: lapCounter,
    time: lapTime,
    formatted: lapTimeFormatted,
    diff: lapDiff
});
```

### Statistics Calculation
Real-time statistics are calculated using array methods:
```javascript
const fastest = Math.min(...times);
const slowest = Math.max(...times);
const average = times.reduce((a, b) => a + b, 0) / times.length;
```

## 🎨 Design Features

### Glass Morphism
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Gradient Backgrounds
- Multi-color gradient background
- Gradient text effects
- Gradient button styles

### Animations
- Smooth transitions on hover
- Pulse animation on stopwatch icon
- Blinking time separator
- Slide-in animation for lap items

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop (> 768px):** Full layout with all features
- **Tablet (481px - 768px):** 2-column button layout
- **Mobile (≤ 480px):** Compact single-column design

### Mobile Optimizations
- Larger touch targets
- Simplified layout
- Adjusted font sizes
- Hidden progress ring on small screens

## 🔧 Customization

### Change Colors
Edit the gradient values in `styles.css`:
```css
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
```

### Adjust Update Frequency
Change the interval in `script.js`:
```javascript
timerInterval = setInterval(updateTime, 10); // 10ms = 1/100 second
```

## 📊 Features Breakdown

### 1. Start Function
- Calculates start time
- Begins interval updates
- Enables pause, reset, and lap buttons

### 2. Pause Function
- Stops the interval
- Maintains elapsed time
- Allows resuming from same point

### 3. Reset Function
- Clears all timers
- Resets display to 00:00:00:00
- Disables unnecessary buttons

### 4. Lap Function
- Records current time
- Calculates difference from previous lap
- Updates lap list and statistics
- Highlights fastest/slowest laps

### 5. Statistics
- Automatically updated with each lap
- Shows fastest, slowest, and average times
- Displays total lap count
- Hidden when no laps recorded

## 🎓 Learning Outcomes

This project demonstrates:

1. **Time Management in JavaScript**
   - Using `Date.now()` for precision timing
   - Managing intervals with `setInterval()`
   - Time calculations and formatting

2. **DOM Manipulation**
   - Dynamic element creation
   - Real-time updates
   - Event handling

3. **CSS Advanced Techniques**
   - Glass morphism effects
   - CSS Grid and Flexbox
   - Animations and transitions
   - Custom scrollbars

4. **User Experience**
   - Keyboard shortcuts
   - Visual feedback
   - Responsive design
   - Intuitive controls

## 🐛 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📝 License

This project is created as part of the Prodigy InfoTech Web Development Internship.

## 👤 Author

**Mohammed Rafiullah**

- GitHub: [@MohamedKhalidh-M](https://github.com/MohamedKhalidh-M)
- Project: STOP WATCH WEB

## 🙏 Acknowledgments


- Font Awesome for icons
- Modern web design inspiration

---

**⭐ If you found this project helpful, please give it a star!**

---

Made with ⏱️ by MOHAMED KHALIDH | © 2025
