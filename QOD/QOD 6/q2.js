//Write a program that removes the time from the given date string "Wed April 15, 7 pm".
// It should return only the date without the time.

const removeTime = (date) => {
    let ch = '';
    for (let i = 0; i < date.length; i++) {
        if (date[i] === ',') {
            break;
        }
        else {
            ch += date[i]
        }
    }
    return ch;
}

console.log(removeTime("Wed April 15, 7 pm"));
