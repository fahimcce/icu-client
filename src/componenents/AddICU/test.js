const currentDate = new Date();

// Options for formatting date
const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

// Options for formatting time
const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // Set to true to use 12-hour format
};

const formattedDate = currentDate.toLocaleString('en-US', dateOptions);
const formattedTime = currentDate.toLocaleString('en-US', timeOptions);
const time = `Date: ${formattedDate} || Time: ${formattedTime}`;

console.log(time);
