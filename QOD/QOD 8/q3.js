// Write a program to take a day as input and determine whether it is a weekday or weekend.
// Example: Tuesday is weekday.

const findDayType = (day) => {
    const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    const weekends = ["saturday", "sunday"];
    if (weekdays.includes(day.toLowerCase())) {
        return "Weekday";
    } else if (weekends.includes(day.toLowerCase())) {
        return "Weekend";
    } else {
        return "Not a valid day.";
    }
};

console.log(findDayType("Saturday"));