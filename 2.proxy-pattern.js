// Is a

const person = {
    name: 'elhosen salama',
    age: 23,
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The Value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
    },
});

person.name;
