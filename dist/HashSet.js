"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
const HashMap_1 = require("./HashMap");
class HashSet extends HashMap_1.HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        super(initialCapacity, loadFactor);
    }
    add(key) {
        this.set(key, true);
    }
    has(key) {
        return super.has(key);
    }
    remove(key) {
        return super.remove(key);
    }
    clear() {
        super.clear();
    }
    overrideentries() {
        return super.keys();
    }
    length() {
        return super.length();
    }
}
exports.HashSet = HashSet;
