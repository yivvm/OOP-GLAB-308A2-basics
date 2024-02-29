// GLAB 308A.2.1: An Object-Oriented Adventure

/*
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
    console.log(`${this.name} rolled a ${result}.`)
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
        super.roll();
        return `End`;
    }
}

class Companion extends Character {
    constructor (name, type) {
        super(name);
        this.type = type;
    }
}

const robin2 = new Adventure('Robin', 'scout');
// console.log(robin2);
// console.log(robin2.scout());

const companion = new Companion('Leo', 'cat');
// console.log(companion)
robin2.companion = companion
// console.log(robin2)
*/

// Part 4: class uniforms
class Character {
    static MAX_HEALTH = 100;
}

class Adventure extends Character {
    static ROLES = ['Fighter', 'Healer', 'Wizard'];

    constructor (name, role) {
        super();

        // check the role that needs to be included in ROLES
        if (!Adventure.ROLES.includes(role)) {
            throw new Error(`Invalid role. Available roles: ${Adventure.ROLES.join(', ')}`);
        }

        this.name = name;
        this.role = role;
    }
}

try {
     const adventurer1 = new Adventure('Robin', 'Righter');
     console.log(adventurer1)
} catch (error) {
    console.error(error.message);
}

