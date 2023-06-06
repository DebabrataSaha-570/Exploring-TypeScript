//Object and enums in typescript

let player: {
    name: string;
    age?: number; // this makes age property optional '?'
    country: string;
    married: boolean;
    clubs?: string[];
}

 player = {
    name: 'messi', 
    age: 35,  
    country : 'Argentina', 
    married : true, 
    clubs: ["Barcelona"]
}

 player = {
    name: 'Neymar', 
    // age: 30, 
    country : 'Brazil', 
    married : false, 
    clubs: ["Barcelona"]
}

player.married = false; 
player.age = player.age! + 5; //This sign is called not/null/assertion sign (when we don't have to do optional chaining we have to use this sign)

player.clubs = player.clubs?.map((club) => club.toUpperCase()) //Here we are usign optional chaining thats why we are using conditional sign


// console.log(player, player.country, player['clubs'])



// ......... enum type

enum Friends {
    Arif = 10, 
    Kalam = 15, 
    Salam = 20, 
    Balam = 30
}

console.log(Friends.Arif)

enum configs {
    API_key = "api_key", 
    Domain_Name = "domain_name"
}

console.log(configs.Domain_Name)


//When we don't want to change the value of and object and don't want to update the object (key, value) then we will use enum.