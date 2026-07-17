import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  getItem<T>(key: string): T | null {
    const serializedValue = localStorage.getItem(key);
    return serializedValue === null ? null : JSON.parse(serializedValue) as T;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}