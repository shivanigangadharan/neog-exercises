// live ex13: chaining#
// challenge#
// Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.

// Note: Instead of returning the response from the server this should return the length.

// Hint: It will return in a promise.

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`error from server: ${msg}`);
            }
            resolve(`from server: ${msg}`);
        }, 3000);
    });
}

const getServerLength = (msg) => {
    fakeFetch(msg)
        .then((res) => res.length)
        .then((data) => console.log(data));
};

getServerLength("Hello");


//doubt : check is this correct + why can't we return the length instead of consoling it in the async func itself?
//using async await
const getServerLength = async (msg) => {
    try {
        const res = await fakeFetch(msg);
        console.log(res.length);
    }
    catch (e) {
        console.log("Error : ", e);
    }
    finally {
        console.log("Thank you.");
    }
};

getServerLength("Hello");
