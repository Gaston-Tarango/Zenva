let maxHealth = 200;
// let currentHealth = 100;
let numberOfLives = 3;

if (true) {
    let isGameOver = false;
    let isNotGameOver = true;
}

console.log(isNotGameOver);

let level = 1;
let title = `Level ${level}`;

//Arrays

var inventory = ['shirt', 'axe', 'bread'];
let shirt = inventory[0];
inventory[2] = 'cheese';

var length = inventory.length;
length = inventory[0].length;

inventory.push('water');
var water = inventory.pop();

var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2]
];

var firstWorld = levels[0];
var firstLevel = levels[0][1];


//Functions

// var currentHealth = 50;
// var healAmount = 10;
//
// function heal() {
//     currentHealth += healAmount;
// }

var currentHealth = 50;

function heal(healAmount = 10) {
    var newHealth = currentHealth += healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return (currentHealth / maxHealth) * 100;
}

heal();
heal(30);

// if statements

var keyPressed = 'l';
var xPos = 0;
let endPos = 5;

if (keyPressed == 'r') {
    if (xPos < endPos) {
        xPos += 1;
    }

} else if (keyPressed == 'l') {
    xPos += 1;
} else {
    xPos = 0;
}

// While loops

let endPos =5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

// while (pos < endPos) {
//     pos++;
// }

while (!isGameOver) {
    xPos++;
    if (xPos >= endPos || xPos == enemyPos) {
        isGameOver = true;
    }
}

while (xPos < isGameOver) {
    xPos++;
    if (xPos == enemyPos) {
        break;
    }
}

function movePlayer() {
    while (xPos < enemyPos) {
        if (xPos == enemyPos) {
            return;
        }
    }

}

// For Loops

var items = ["axe", "shirt", "knife"];
var finalString = "In my inventory, i have ";

// for(var i = 0; i < items.length; i++) {
//     var itemName = items[i];
//     finalString += itemName + " ";
// }

items.forEach(function (element) {
    finalString += element + " ";
});


//Objects

var gameCharacter = {
    name: "Black Flame",
    xPos: 0,
    items: ["Knife", "Food"],
    move: function (x) {
        this.xPos += x;
    }
};

var name = gameCharacter.name;

gameCharacter.items = ['axe', 'bread'];
gameCharacter.move(5);
var x = gameCharacter.xPos;

gameCharacter.yPos = 0;
gameCharacter.move = function (x,y) {
    this.xPos += x;
    this.yPos += y;
};
