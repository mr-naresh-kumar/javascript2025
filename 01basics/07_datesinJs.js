let myDate  = new Date(); // Current date and time
console.log(myDate); // Outputs the current date and time
console.log(myDate.toString()); // Outputs the date in a human-readable format


console.log(myDate.toDateString()); // Outputs the date in a human-readable format without time
console.log(myDate.toTimeString()); // Outputs the time in a human-readable format
console.log(myDate.toISOString()); // Outputs the date in ISO format
console.log(myDate.toLocaleDateString()); // Outputs the date in a locale-specific format
console.log(myDate.toLocaleTimeString()); // Outputs the time in a locale-specific format

console.log(typeof myDate); // Outputs the type of the variable, which is 'object'
console.log(myDate.getFullYear()); // Outputs the year (e.g., 2023)


newDate.toLocaleTimeString('default',{
    weekday: 'long',
    timeZone: 'UTC',
    


})