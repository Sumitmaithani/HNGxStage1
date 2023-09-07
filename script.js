// Get elements by data-testid attributes
const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Function to update the day and time
function updateDateTime() {
    const now = new Date();
    
    // Get the day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    
    // Get the UTC time
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes} (UTC)`;
    
    // Update the content
    dayElement.textContent = dayOfWeek;
    timeElement.textContent = time;
}

// Call the update function initially
updateDateTime();

// Update the time every minute
setInterval(updateDateTime, 60000);
