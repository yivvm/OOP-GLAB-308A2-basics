// GLAB 308A.2.1: An Object-Oriented Adventure


// Part 1:
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ['sword', 'potion', 'artifact'],
    companion: {
        name: 'Leo',
        type: 'cat'
    }
}

// console.log(adventurer.inventory[0])
// console.log(Object.keys(adventurer))
// console.log(Object.values(adventurer))
// for (const item in adventurer) {
//     console.log(item)
// }

adventurer.companion.companionOfLeo = {
    name: 'Frank',
    type: 'flea',
    belongings: ['small hat', 'sunglasses']
};

// console.log(adventurer)

// append a function to the object
adventurer.roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}

// console.log(adventurer)
// adventurer.roll()
// adventurer.roll(3)


// Part 2: class fantacy
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    addItem(item) {
        this.inventory.push(item);
    }
    addItems(items) {
        // items.forEach((i) => {
        //     this.inventory.push(i)
        // })
        this.inventory.push(...items);
    }
}

const robin = new Character('Robin');
robin.inventory = ['sword', 'potion', 'artifact'];
robin.companion = new Character('Leo');
robin.companion.type = "Cat";
robin.companion.companion = new Character('Frank');
robin.companion.companion.type = 'flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses'];

Character.prototype.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
}

// console.log(robin)


// Part 3: class features
class Adventure extends Character {
    constructor (name, role) {
        super(name);
        this.role = role;
        this.inventory.push('bedroll', '50 gold coins');
    }
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        // super.roll();
        return this.roll();
    }
}

class Companion extends Character {
    constructor (name, type) {
        super(name);
        this.type = type;
    }
    interact() {
        console.log(`${this.name} the ${this.type} is interacting.`)
    }
}

const robin2 = new Adventure('Robin', 'scout');
// console.log(robin2);
// console.log(robin2.scout());

const companion = new Companion('Leo', 'cat');
// console.log(companion)
robin2.companion = companion
// console.log(robin2)


// Part 4: class uniforms
// class Character {
//     static MAX_HEALTH = 100;
// }

// class Adventure extends Character {
//     static ROLES = ['Fighter', 'Healer', 'Wizard'];

//     constructor (name, role) {
//         super();

//         // check the role that needs to be included in ROLES
//         if (!Adventure.ROLES.includes(role)) {
//             throw new Error(`Invalid role. Available roles: ${Adventure.ROLES.join(', ')}`);
//         }

//         this.name = name;
//         this.role = role;
//     }
// }

// try {
//      const adventurer1 = new Adventure('Robin', 'Righter');
//      console.log(adventurer1)
// } catch (error) {
//     console.error(error.message);
// }


// Part 5: gather your party
class AdventurerFactory {
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate(name) {
        const newAdventurer = new AdventurerFactory(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
const robin3 = healers.generate("Robin");

class Healer extends Adventure {
    constructor (name) {
        super(name, 'Healer');
    }
}

// console.log(robin3)


// Part 6: developing skills
function duel(adventurer1, adventurer2) {
    while (adventurer1.health > 50 && adventurer2.health > 50) {
        const roll1 = adventurer1.roll();
        const roll2 = adventurer2.roll();

        console.log(`${adventurer1.name} rolled a ${roll1}. ${adventurer2.name} rolled a ${roll2}.`)

        if (roll1 < roll2) {
            adventurer1.health -= 1;
            console.log(`${adventurer1.name} lost 1 health. Current health: ${adventurer1.health}`);
        } else if (roll1 > roll2) {
            adventurer2.health -= 1;
            console.log(`${adventurer2.name} lost 1 health. Current health: ${adventurer2.health}`);
        } else {
            console.log("It's a tile!");
        }
    }

    if (adventurer1.health <= 50) {
        console.log(`${adventurer2.name} wins the duel!`)
    } else {
        console.log(`${adventurer1.name} wins the duel!`)
    }
    
}

// add duel method to Adventure class prototype
Adventure.prototype.duel = duel;
console.log(Adventure.prototype)


// Part 7: adventure forth
// 7.1 Generate a whole host of adventurers and their companions, and have them interact using the instance methods you have developed.
const adventurer1 = new Adventure('Bill', 'Fighter');
const companion1 = new Companion('Lynn', 'cat');
adventurer1.companion = companion1

const adventurer2 = new Adventure('Alice', 'Healer');
const companion2 = new Companion('Max', 'dog');
adventurer2.companion = companion2;

adventurer1.scout();
adventurer2.scout();
adventurer1.companion.interact();
adventurer2.companion.interact();

// duel(adventurer1, adventurer2);


// 7.2 create other classes that can interact with your characters; perhaps more characters, but in a different direction from adventurers or companions – dragons, orcs, elves, vampires...
class Dragon extends Character {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    breathFire(target) {
        console.log(`${this.name} breathes fire at ${target.name}.`)
        target.health -= 20;
        console.log(`${this.name} takes 20 damage. Current health: ${target.health}.`);
    }
}

class Orc extends Character {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
    }

    attack(target) {
        console.log(`${this.name} swings ${this.weapon} at ${target.name}.`);
        target.health -= 15;
        console.log(`${target.name} takes 15 damage. Current health: ${target.health}.`);
    }
}

class Elf extends Character {
    constructor(name, magic) {
        super(name);
        this.magic = magic;
    }
    
    castSpell(target) {
        console.log(`${this.name} cast ${this.magic} on ${target.name}.`)
        target.health -= 10;
        console.log(`${target.name} takes 10 damage. Current health: ${target.health}.`);
    }
}

class Vampire extends Character {
    constructor(name) {
        super(name);
    }

    bite(target) {
        console.log(`${this.name} bites ${target.name}.`);
        target.health -= 5;
        this.health += 5;
        console.log(`${target.name} takes 5 damage. Current health: ${target.health}.`);
        console.log(`${this.name} gains 5 health. Current health: ${this.health}.`);
    }
}

const dragon = new Dragon('Smaug', 'red');
const orc = new Orc('Gorrok', 'battleaxe');
const elf = new Elf('Legolas', 'arrow of piercing');
const vampire = new Vampire('Dracula');

dragon.breathFire(adventurer1);
orc.attack(adventurer2);
elf.castSpell(adventurer1);
vampire.bite(adventurer2);

dragon.breathFire(companion1);
orc.attack(companion2);
elf.castSpell(companion1);
vampire.bite(companion2);


// 7.3 create classes for the inventory itself, and include inventory methods such as adding, removing, searching, selling, trading. Even individual items could be their own classes, and have properties and methods specific to the type of item.
class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1)  {// indexOf() method returns -1 if the item is not found in the array
            this.items.splice(index, 1);
        }
    }

    searchItem(name) {
        return this.items.find((i) => i.name === name);
    }

    sellItem(name, price) {
        const item = this.searchItem(name);
        if (item) {
            this.removeItem(item);
            console.log(`Sold ${item.name} for ${price} gold.`)
        } else {
            console.log(`Item ${name} not found in inventory.`);
        }
    }

    tradeItem(item, targetInventory) {
        if (this.items.includes(item)) {
            this.removeItem(item);
            targetInventory.addItem(item);
            console.log(`Traded ${item.name} with ${targetInventory.constructor.name}.`);
        } else {
            console.log(`Item ${item.name} not found in inventory.`);
        }
    }
}

class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class Weapon extends Item {
    constructor(name, description, damage) {
        super(name, description)
        this.damage = damage;
    }

    attack(target) {
        console.log(`Attacting ${target.name} with ${this.name}.`);
        target.health -= this.damage;
        console.log(`${target.name} takes ${this.damage} damage. Current health: ${target.health}.`);
    }
}

class Potion extends Item {
    constructor(name, description, healingPower) {
        super(name, description);
        this.healingPower = healingPower;
    }

    use(target) {
        console.log(`Using ${this.name} on ${target.name}.`);
        target.health += this.healingPower;
        console.log(`${target.name} gains ${this.healingPower} health. Current health: ${target.health}.`);
    }
}

const playerInventory = new Inventory();
const vendorInventory = new Inventory();

const sword = new Weapon('Sword', 'A sharp blade.', 15);
const potion = new Potion('Healing Potion', 'Restores health', 20);

playerInventory.addItem(sword);
playerInventory.addItem(potion);

playerInventory.sellItem('Sword', 10);
playerInventory.sellItem('Axe', 15);

playerInventory.tradeItem(potion, vendorInventory);