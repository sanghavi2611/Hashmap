import { HashMap } from './HashMap';

export class HashSet<K extends string> extends HashMap<K, true> {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    super(initialCapacity, loadFactor);
  }

  add(key: K): void {
    this.set(key, true);
  }

  has(key: K): boolean {
    return super.has(key);
  }

  remove(key: K): boolean {
    return super.remove(key);
  }

  clear(): void {
    super.clear();
  }

  overrideentries(): K[] {
    return super.keys();
  }

  length(): number {
    return super.length();
  }
}
