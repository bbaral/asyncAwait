console.log("Person1: shows ticket");
console.log("Person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  const addButter = new Promise((resolve, reject) => {
    resolve(`butter`);
  });

  let ticket = await promiseWifeBringingTicket;

  console.log(`Wife: I have the ${ticket}`);
  console.log("Husband: we should go in");
  console.log("wife: no i am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn}`);
  console.log('wife: I need butter on my popcorn');

  let butter = await addButter;

  console.log(`wife: I got some ${butter}`);
  console.log('husband: anything else darling?');
  console.log('wife: lets go we are getting late');
  console.log(`husband: thank you for brining ${ticket}`);

  return ticket;
};

preMovie().then(m => console.log(`person3: shows ${m}`));

console.log("Person4: shows ticket");
console.log("Person5: shows ticket");
