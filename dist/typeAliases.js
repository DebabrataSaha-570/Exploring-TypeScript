"use strict";
// Explore Type Aliases
var person = {
    name: "John",
    email: "john@example.com",
    age: 33,
    phone: ["123"],
    address: {
        presentAddress: "example",
        permanentAddress: "example",
    },
    favorites: [
        {
            type: "food",
            value: "Biriyani",
        },
        {
            type: "player",
            value: "Messi",
        },
    ],
    isLoggedIn: true,
};
if (Array.isArray(person.phone)) {
    person.phone.map(function (val) { return val.toLowerCase(); });
}
else {
    person.phone.toLowerCase();
}
