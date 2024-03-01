# Adventure Game Inventory System

#### OOP-GLAB-308A2-basics

This project implements a simple adventure game inventory system in JavaScript. It includes classes for characters, items, and inventory management.

## Classes

### Character

The `Character` class represents a character in the game. It has properties such as name, health, and inventory.

#### Methods

- `addItem(item)`: Adds an item to the character's inventory.
- `addItems(items)`: Adds multiple items to the character's inventory.
- `roll(mod)`: Simulates rolling a dice with an optional modifier.

### Adventurer

The `Adventurer` class extends `Character` and represents a player character in the game. It has additional properties such as role and specialized methods like `duel` and `scout`.

### Companion

The `Companion` class extends `Character` and represents a companion character that can interact with adventurers.

### Dragon, Orc, Elf, Vampire

These classes represent non-player characters (NPCs) in the game with unique abilities.

### Inventory

The `Inventory` class represents an inventory system for storing items. It includes methods for adding, removing, searching, selling, and trading items.

### Item

The `Item` class represents a generic item in the game with properties like name and description.

#### Subclasses

- `Weapon`: Represents a weapon item with additional properties like damage and methods like `attack`.
- `Potion`: Represents a potion item with additional properties like healing power and methods like `use`.

## Usage

```javascript
// Example usage of the adventure game inventory system

// Create instances of characters and items
const adventurer = new Adventurer('Robin', 'Fighter');
const companion = new Companion('Leo', 'Cat');
const sword = new Weapon('Sword', 'A sharp blade.', 15);
const potion = new Potion('Healing Potion', 'Restores health.', 20);

// Add items to inventory
adventurer.addItem(sword);
adventurer.addItem(potion);

// Perform actions
adventurer.duel(dragon);
companion.interact();
