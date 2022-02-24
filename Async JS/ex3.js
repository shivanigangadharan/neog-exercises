// live ex3: function which takes two callbacks#
// challenge
// Write a function willThanosKillMe() .This function will take three parameters

// 1. Your name
// 2. Function to call if Thanos doesn't kill you.
// 3. Function to call if Thanos does kill you.

// This function will call success callback if your name has even characters.You won't die.

// But if your name has odd number of characters then you're going to die. Sorry! :(

// Now, call this function with the given parameters.
// The success function should console a happy message:
// Yay! I am alive! and the failure function should console your will:
// Give my bose speakers and apple headphones to my sister.

const odd = () => {
    console.log("Give my bose speakers and apple headphones to my sister.");
};

const even = () => {
    console.log("Yay, I'm alive.");
};

const willThanosKillMe = (name, cbo, cbe) => {
    name.length % 2 == 0 ? cbe() : cbo();
};

willThanosKillMe("Shivani", odd, even);