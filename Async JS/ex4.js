// ex4: use setTimeOut()
// challenge

// - Learn how to use setTimeout()
// - Now, write a function that takes a message and a delay and print that message after the delay.

const printMessage = (message, delay) => {
    setTimeout(() => { console.log(message) }, delay);
}

printMessage("Hi, Shivani here.", 3000);

