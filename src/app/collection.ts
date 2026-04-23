export class Collection<T> {
  constructor(private items: T[]) {}
  getAll(): T[] {
    return this.items;
  }
  
  get(index: number): T {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

remove(index: number): void {
  if (index >= 0 && index < this.items.length) {
  this.items = this.items.filter((item: T, idx: number) => idx !== index);
  } else{
  throw new Error(`Индекс ${index} вне границ коллекции`);
  }
}
  replace(index: number, item: T): void {
    this.items[index] = item;
  }

}