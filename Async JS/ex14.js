// live ex14: waterfall data#
// challenge#
// Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.


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

const syncCallsToServer = (msg1, msg2) => {
    fakeFetch(msg1).then((data1) =>
        fakeFetch(msg2).then((data2) =>
            console.log("Msg1: ", data1, "Msg 2: ", data2)
        )
    );
};

syncCallsToServer("Hello.", "I'm Shivani.");

//using async await
const syncCallsToServer = async (msg1, msg2) => {
    try {
        const res = await fakeFetch(msg1);
        const res2 = await fakeFetch(msg2);
        console.log(res, res2);
    }
    catch (e) {
        console.log("Error :", e);
    }
    finally {
        console.log("Thanks.");
    }
}

syncCallsToServer("Shivani", "Gangadharan");

