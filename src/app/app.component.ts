import './training';
import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import './collection';
import { Collection } from './collection';

interface IUser {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  
  public companyName: string = 'РУМТИБЕТ';
  public userList: IUser[] = [
    { id: 1, name: "Vladislav" },
    { id: 2, name: "Nizam" },
    { id: 3, name: "Farukh" },
  ];
  public productList: IProduct[] = [
    { id: 101, title: "Milk" },
    { id: 102, title: "Bread" },
    { id: 103, title: "Butter" }
  ];

  constructor() {
    this.saveLoginData();
    this.updateLoginCount();
  }
  
  public isMainColor(color: Color): boolean {
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

  public openConsultation(): void {
    console.log('Открытие консультации');
    alert('Форма консультации открыта');
  }

  public searchProgram(): void {
    console.log('Поиск программы');
    alert('Поиск программ');
  }
}