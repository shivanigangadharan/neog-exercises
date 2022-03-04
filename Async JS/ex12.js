// live ex12: print data on success, print error on failure
// challenge#
// Call fakeFetch(msg, true) to get a rejected promise.
// Handle the error with the error handler. Show a message using console.error for errors.


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

fakeFetch("Hi there!", false)
    .then((res) => console.log("res = ", res))
    .catch((err) => console.log("err = ", err));


//using async await
const printData = async (msg) => {
    const data = await fakeFetch(msg, true);
};

const runFunction = async () => {
    try {
        await printData("We couldn't process your request.");
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Thanks for your patience.");
    }
};
runFunction();
