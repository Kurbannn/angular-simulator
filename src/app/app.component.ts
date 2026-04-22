import './training';
import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import './collection';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  
  companyName: string = 'РУМТИБЕТ';
  userList = ['Vladislav', 'Nizam', 'Farukh'];
  productList = ['Milk', 'Bread', 'Butter'];

  constructor() {
    this.saveLoginData();
    this.updateLoginCount();
  }
  
  isMainColor(color: Color): boolean {
    const rgb: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
    return rgb.includes(color);
  }

  private saveLoginData(): void {
    const date: string = new Date().toISOString();
    localStorage.setItem('last-visit', date);
  }

  private updateLoginCount(): void {
    let visits: number = parseInt(localStorage.getItem('visit-count') || '0', 10);
    visits = visits + 1;
    localStorage.setItem('visit-count', visits.toString());
  }

  openConsultation(): void {
  }

  searchProgram(): void {
  }
}