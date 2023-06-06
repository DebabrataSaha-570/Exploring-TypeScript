"use strict";
//Object and enums in typescript
var _a;
var player;
player = {
    name: 'messi',
    age: 35,
    country: 'Argentina',
    married: true,
    clubs: ["Barcelona"]
};
player = {
    name: 'Neymar',
    // age: 30, 
    country: 'Brazil',
    married: false,
    clubs: ["Barcelona"]
};
player.married = false;
player.age = player.age + 5; //This sign is called not/null/assertion sign (when we don't have to do optional chaining we have to use this sign)
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); }); //Here we are usign optional chaining thats why we are using conditional sign
// console.log(player, player.country, player['clubs'])
// ......... enum type
var Friends;
(function (Friends) {
    Friends[Friends["Arif"] = 10] = "Arif";
    Friends[Friends["Kalam"] = 15] = "Kalam";
    Friends[Friends["Salam"] = 20] = "Salam";
    Friends[Friends["Balam"] = 30] = "Balam";
})(Friends || (Friends = {}));
console.log(Friends.Arif);
var configs;
(function (configs) {
    configs["API_key"] = "api_key";
    configs["Domain_Name"] = "domain_name";
})(configs || (configs = {}));
console.log(configs.Domain_Name);
//When we don't want to change the value of and object and don't want to update the object (key, value) then we will use enum.
