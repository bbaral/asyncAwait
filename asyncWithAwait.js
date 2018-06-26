"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Person1: shows ticket");
console.log("Person2: shows ticket");
const preMovie = () => __awaiter(this, void 0, void 0, function* () {
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
    let ticket = yield promiseWifeBringingTicket;
    console.log(`Wife: I have the ${ticket}`);
    console.log("Husband: we should go in");
    console.log("wife: no i am hungry");
    let popcorn = yield getPopcorn;
    console.log(`husband: I got some ${popcorn}`);
    console.log('wife: I need butter on my popcorn');
    let butter = yield addButter;
    console.log(`wife: I got some ${butter}`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log(`husband: thank you for brining ${ticket}`);
    return ticket;
});
preMovie().then(m => console.log(`person3: shows ${m}`));
console.log("Person4: shows ticket");
console.log("Person5: shows ticket");
