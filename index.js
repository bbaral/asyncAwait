"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(20);
            console.log("slow promise is done");
        }, 2000);
    });
};
var resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(10);
            console.log("fast promise is done");
        }, 1000);
    });
};
var sequentialStart = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('==SEQUENTIAL START==');
        const slow = yield resolveAfter2Seconds(); // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
        const fast = yield resolveAfter1Second();
        console.log(slow);
        console.log(fast);
    });
};
var concurrentStart = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('==CONCURRENT START with await==');
        const slow = resolveAfter2Seconds(); // starts timer immediately
        const fast = resolveAfter1Second();
        console.log(yield slow);
        console.log(yield fast); // waits for slow to finish, even though fast is already done!
    });
};
var stillSerial = function () {
    console.log('==CONCURRENT START with Promise.all==');
    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
        console.log(slow);
        console.log(fast);
    });
};
var parallel = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message)); // in this case could be simply written as console.log(resolveAfter2Seconds());
    resolveAfter1Second().then((message) => console.log(message));
};
sequentialStart(); // takes 2+1 seconds in total
// wait above to finish
setTimeout(concurrentStart, 4000); // takes 2 seconds in total
// wait again
setTimeout(stillSerial, 7000); // same as before
// wait again
setTimeout(parallel, 10000); // trully parallel
