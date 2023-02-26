// Is a Class that we can have only one insistence from it

let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            Error("You can only create one instance!");
        }
        instance = this
    }
    getInstance() {
        return this;
    }
    getCount() {
        return counter;
    }
    increment() {
        return ++counter;
    }
    decrement() {
        return --counter;
    }
}

const SingletonCounter = Object.freeze(Counter());

export default SingletonCounter;