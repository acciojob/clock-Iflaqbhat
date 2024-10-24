//your JS code here. If required.
const today = new Date();

// Get day, month, and year
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const year = today.getFullYear();

// Get hours, minutes, and seconds
let hours = today.getHours();
const minutes = String(today.getMinutes()).padStart(2, '0');
const seconds = String(today.getSeconds()).padStart(2, '0');

// Determine AM/PM and convert 24-hour format to 12-hour format
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // Convert 0 (midnight) or 12 (noon) to 12-hour format

// Format the date and time
const formattedDate = `${day}/${month}/${year}`;
const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

console.log(formattedDate, formattedTime);
