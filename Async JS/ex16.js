// live ex16: use async-await to do waterfall#
// challenge#
// Do question number 14 with async-await this time.

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

const getData = async (msg1, msg2) => {
    const data1 = await fakeFetch(msg1);
    const data2 = await fakeFetch(msg2);
    console.log("Msg 1 :", data1, "Msg 2:", data2);
};

getData("Shivani", "Gangadharan");


