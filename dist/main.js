"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HashMap_1 = require("./HashMap");
const HashSet_1 = require("./HashSet"); // Optional: remove if you're not testing HashSet
// Create a new HashMap instance with capacity 16 and load factor 0.75
const test = new HashMap_1.HashMap(16, 0.75);
// Populate the map
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
// Confirm it's full (load factor reached)
console.log('Length before adding moon:', test.length());
console.log('Capacity before adding moon:', 16); // you set this manually
// Overwrite some values
test.set('apple', 'crimson');
test.set('banana', 'lemon');
// Add one more to trigger resize
test.set('moon', 'silver');
// Confirm new capacity is double and map still works
console.log('\nAfter resizing:');
console.log('Length:', test.length());
console.log('Get apple:', test.get('apple')); // crimson
console.log('Has moon:', test.has('moon')); // true
// Remove an entry
console.log('Removing "dog":', test.remove('dog')); // true
console.log('Has dog?', test.has('dog')); // false
// Print all data
console.log('\nKeys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());
// Clear the map
test.clear();
console.log('\nAfter clearing:');
console.log('Length:', test.length());
// ==========================
// OPTIONAL: Test HashSet
// ==========================
console.log('\n--- HashSet Demo ---');
const set = new HashSet_1.HashSet();
set.add('apple');
set.add('banana');
set.add('carrot');
set.add('apple'); // duplicate
console.log('Set has "banana"?', set.has('banana')); // true
set.remove('banana');
console.log('Set has "banana"?', set.has('banana')); // false
console.log('Set entries:', set.entries());
console.log('Set length:', set.length());
set.clear();
console.log('Set after clear:', set.entries());
