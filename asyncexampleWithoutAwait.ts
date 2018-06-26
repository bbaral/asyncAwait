console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

// promiseWifeBringingTicket.then((t) => {
//     console.log(`Person3: shows ${t}`);
// });

const getPopcorn = promiseWifeBringingTicket.then((t) => {
    console.log('Wife: I have the tickets');
    console.log('Husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => {
        resolve(`Wife and husband walks in with ${t} popcorn`);
    });
});
const getButter = getPopcorn.then((t) => {
    console.log('husband: I got some popcorn');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
    });
});

getButter.then((t) => {
    console.log(t);
});

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');
