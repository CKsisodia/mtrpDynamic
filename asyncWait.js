// // promise
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const ImakePromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     },5000)
// }).then((t) => {
//     console.log(`person3: shows ${t}`);
// })

// /* OR
// const ImakePromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     },5000)
// });
// ImakePromise.then((t) => {
//     console.log(`person3: shows ${t}`);
// });
// */
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// promises
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const ImakePromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     },5000)
// });

// // below all console log will happens after you get/resolve tickets/ImakePromise
// const getPopcorn = ImakePromise.then((t) => {
//     console.log('wife: i have the tikets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} + popcorn`));
// });

// // below all console log will happens after you get/resolve getPopcorn
// const getButter = getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn');
//     console.log('husband: now we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} + butter`));
// });

// getButter.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// above here we have to maintain the sequence of getting/resolve
//we can fix with async await

// ASYNC AWAIT

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => 'preMovie';
// preMovie().then((m) => console.log(m));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMovie = async () => {
//   const ImakePromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("ticket"), 3000);
//   });
//   const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
//   const getButter = new Promise((resolve, reject) => resolve(`butter`));

//   let ticket = await ImakePromise;

//   console.log("wife: i have the tikets");
//   console.log("husband: we should go in");
//   console.log("wife: no i am hungry");

//   let popcorn = await getPopcorn;

//   console.log(`husband: i got some ${popcorn}`);
//   console.log("husband: now we should go in");
//   console.log("wife: i need butter on my popcorn");

//   let butter = await getButter;

//   console.log(`husband: i got some ${butter} on popcorn`);
//   console.log("husband: anything else darling?");
//   console.log("wife: now we should go in");

//   return ticket;
// };

// preMovie().then((m) => console.log(`person3: shows${m}`));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

//ASYNC AWAIT PROMISES ALL
// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMovie = async () => {
//   const ImakePromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("ticket"), 3000);
//   });
//   const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

//   const getCandy = new Promise((resolve, reject) => resolve(`candy`));

//   const getCoke = new Promise((resolve, reject) => resolve(`coke`));

//   let ticket = await ImakePromise; 

//   let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
//   console.log(`${popcorn}, ${candy}, ${coke}`);

//   return ticket;
// };

// preMovie().then((m) => console.log(`person3: shows${m}`));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

//ERROR CATCH
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const ImakePromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("ticket"), 3000);
  });

  let ticket
 try {
    ticket = await ImakePromise; 
 } catch(e){
    ticket = 'sad face'
 }

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");