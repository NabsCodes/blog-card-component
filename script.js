// Write your JavaScript here
function updateTimeAgo() {
    const timeAgoElement = document.getElementById('time-ago');
    const currentTime = Date.now(); // Current timestamp in milliseconds
    let initialTimestamp = parseInt(localStorage.getItem('initialTimestamp')); // Get initial timestamp from localStorage

    if (!initialTimestamp) {
        initialTimestamp = currentTime;
        localStorage.setItem('initialTimestamp', initialTimestamp); // Store initial timestamp in localStorage
    }

    const timeDifference = currentTime - initialTimestamp;

    if (timeDifference < 3000) {
        timeAgoElement.textContent = 'just now';
    } else if (timeDifference < 60000) {
        const secondsAgo = Math.floor(timeDifference / 1000);
        timeAgoElement.textContent = `${secondsAgo}s ago`;
    } else if (timeDifference < 3600000) {
        const minutesAgo = Math.floor(timeDifference / 60000);
        timeAgoElement.textContent = `${minutesAgo}m ago`;
    } else if (timeDifference < 86400000) {
        const hoursAgo = Math.floor(timeDifference / 3600000);
        timeAgoElement.textContent = `${hoursAgo}h ago`;
    } else {
        const daysAgo = Math.floor(timeDifference / 86400000);
        timeAgoElement.textContent = `${daysAgo}d ago`;
    }
}

// Call updateTimeAgo on page load
updateTimeAgo();

// Update time every second after the initial load
setInterval(updateTimeAgo, 1000);
