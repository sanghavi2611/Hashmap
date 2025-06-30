"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.count = 0;
        this.buckets = Array.from({ length: this.capacity }, () => []);
    }
    hash(key) {
        const prime = 31;
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }
    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.count = 0;
        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (const entry of bucket) {
            if (entry[0] === key) {
                entry[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
        this.count++;
        if (this.count / this.capacity > this.loadFactor) {
            this.resize();
        }
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (const [k, v] of bucket) {
            if (k === key)
                return v;
        }
        return null;
    }
    has(key) {
        const index = this.hash(key);
        return this.buckets[index].some(([k]) => k === key);
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const i = bucket.findIndex(([k]) => k === key);
        if (i !== -1) {
            bucket.splice(i, 1);
            this.count--;
            return true;
        }
        return false;
    }
    length() {
        return this.count;
    }
    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.count = 0;
    }
    keys() {
        const keys = [];
        for (const bucket of this.buckets) {
            for (const [k] of bucket)
                keys.push(k);
        }
        return keys;
    }
    values() {
        const values = [];
        for (const bucket of this.buckets) {
            for (const [, v] of bucket)
                values.push(v);
        }
        return values;
    }
    entries() {
        const result = [];
        for (const bucket of this.buckets) {
            for (const entry of bucket)
                result.push(entry);
        }
        return result;
    }
}
exports.HashMap = HashMap;
