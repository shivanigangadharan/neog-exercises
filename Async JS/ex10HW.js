//Understand how to make your own promise, make your own version of fakeFetch().

const myFakeFetch = (msg, shouldReject) => {
    return new Promise = (resolve, reject) => {
        setTimeout(
            () => {
                if (shouldReject) {
                    reject(`Error - ${msg}`)
                }
                resolve(`Message from server : ${msg}`);
            },
            3000
        )
    }
}

