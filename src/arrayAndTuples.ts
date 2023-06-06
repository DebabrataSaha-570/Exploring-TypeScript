//Array and tuples in typeScript

let players : string[]; //Array that only allows strings


players = ["Messi", "Ronaldo"]

players.push("Neymar"); 

// players.push(123) //gives an error

const newPlayers = players.map((player, index) => index + 1 + '. ' + player)

console.log(players, newPlayers)

// ......................

let oldPlayers : (string | number | boolean)[]; //Array that allows string, number and boolean (in a single array)

oldPlayers =['sakib', 'mushfiq', 'liton']
oldPlayers.push(77, true)

// oldPlayers[0] = {} //gives an error

console.log(oldPlayers)

// ........................ 

let ultraOldPlayers : string[] | number[] | boolean []; // Array that allows only string, number and boolean (in a different array) 

ultraOldPlayers = ["messi", "Ronaldo"]
ultraOldPlayers = [false, true]
ultraOldPlayers = [12, 34]

// .................. 

// Tuple (That helps to put different types of variable in the different index of an array)

let newUltraPlayers : [string, string, number, boolean, string] //Array that allows first and second index string, third is number , fourth is boolean and fifth is string. 

newUltraPlayers = ["messi", "ronaldo", 12, true, 'Shuvo']


