type Entry<K, V> = [K, V];

export class HashMap<K extends string, V> {
  private buckets: Entry<K, V>[][];
  private capacity: number;
  private loadFactor: number;
  private count: number;

  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.count = 0;
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  private hash(key: K): number {
    const prime = 31;
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  private resize(): void {
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

  set(key: K, value: V): void {
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

  get(key: K): V | null {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return null;
  }

  has(key: K): boolean {
    const index = this.hash(key);
    return this.buckets[index].some(([k]) => k === key);
  }

  remove(key: K): boolean {
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

  length(): number {
    return this.count;
  }

  clear(): void {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.count = 0;
  }

  keys(): K[] {
    const keys: K[] = [];
    for (const bucket of this.buckets) {
      for (const [k] of bucket) keys.push(k);
    }
    return keys;
  }

  values(): V[] {
    const values: V[] = [];
    for (const bucket of this.buckets) {
      for (const [, v] of bucket) values.push(v);
    }
    return values;
  }

  entries(): Entry<K, V>[] {
    const result: Entry<K, V>[] = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) result.push(entry);
    }
    return result;
  }
}
