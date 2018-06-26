"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Person1: shows ticket');
console.log('Person2: shows ticket');
const preMovie = () => __awaiter(this, void 0, void 0, function* () {
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => reject('ticket'), 3000);
    });
    let ticket;
    try {
        ticket = yield person3PromiseToShowTicketWhenWifeArrives;
    }
    catch (e) {
        ticket = 'sad face';
    }
    return ticket;
});
preMovie().then((t) => console.log(`person3 shows ${t}`));
console.log('Person4: shows ticket');
console.log('Person5: shows ticket');
