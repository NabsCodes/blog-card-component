const timer = document.querySelector('.time-ago');
const lastRefreshed = new Date();

setInterval(function () {
    const now = new Date();
    const difference = now - lastRefreshed;

    // Display the time relative to the current time.
    timer.textContent = formatRelativeTime(difference);
}); // Update every second.

function formatRelativeTime(difference) {
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    switch (true) {
        case seconds < 60:
            return `${seconds} seconds ago`;
        case minutes < 60:
            return `${minutes} minutes ago`;
        case hours < 24:
            return `${hours} hours ago`;
        case days < 7:
            return `${days} days ago`;
        default:
            return new Intl.DateTimeFormat(navigator.language, {
                dateStyle: 'full',
            }).format(lastRefreshed);
    }
}
