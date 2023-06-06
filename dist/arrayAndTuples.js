"use strict";
//Array and tuples in typeScript
var players; //Array that only allows strings
players = ["Messi", "Ronaldo"];
players.push("Neymar");
// players.push(123) //gives an error
var newPlayers = players.map(function (player, index) { return index + 1 + '. ' + player; });
// console.log(players, newPlayers)
// ......................
var oldPlayers; //Array that allows string, number and boolean (in a single array)
oldPlayers = ['sakib', 'mushfiq', 'liton'];
oldPlayers.push(77, true);
// oldPlayers[0] = {} //gives an error
// console.log(oldPlayers)
// ........................ 
var ultraOldPlayers; // Array that allows only string, number and boolean (in a different array) 
ultraOldPlayers = ["messi", "Ronaldo"];
ultraOldPlayers = [false, true];
ultraOldPlayers = [12, 34];
// .................. 
// Tuple (That helps to put different types of variable in the different index of an array)
var newUltraPlayers; //Array that allows first and second index string, third is number , fourth is boolean and fifth is string. 
newUltraPlayers = ["messi", "ronaldo", 12, true, 'Shuvo'];
