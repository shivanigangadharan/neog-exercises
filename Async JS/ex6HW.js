// h/w ex6: setInterval
// challenge

// - learn how setInterval works
// - 6.1 write a function which takes a message and time. The function should print that message every X interval.
// - 6.2 Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.

//6.1
const printMessage = (msg, delay) => {
    setInterval(() => {
        console.log(msg);
    }, delay);
};

printMessage("Hi, it's Shivani.", 3000);

//6.2
const myfunc = (num) => {
    console.log(num);
    if (num == 0) {
        console.log("BANG BANG!");
    }
};

const countDown = (num) => {
    setInterval(() => {
        if (num >= 0) {
            myfunc(num);
            num -= 1;
        }
        return;
    }, 1000);
};

countDown(6);