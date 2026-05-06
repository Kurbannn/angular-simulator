import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  isLoading: boolean = true;
 
  currentMode: 'date' | 'counter' = 'date'; 
  
  currentDate: string = '';
  private timerInterval: any;

  count: number = 0;

  liveInputValue: string = '';

  selectedLocation: string = '';
  selectedDate: string = '';
  selectedMembers: string = '';
  companyName: string = 'РУМТИБЕТ';

  programCards = [
    { id: 1, title: 'Опытный гид', image: '/image/expert-guide.svg', description: 'Гид с опытом .' },
    { id: 2, title: 'Безопасность', image: '/image/safe-hiking.svg', description: 'безопасная цена.' },
    { id: 3, title: 'Комфорт', image: '/image/loyal-prices.svg', description: 'лояльная цена.' }
  ];

  ngOnInit(): void {
  
    this.updateDate();
    this.timerInterval = setInterval(() => {
      this.updateDate();
    }, 1000);

    
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

 
  private updateDate(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('ru-RU', {
      day: 'numeric', month: 'long', year: 'numeric'
    }) + ', ' + now.toLocaleTimeString('ru-RU');
  }

 
  toggleWidgetMode(): void {
    this.currentMode = this.currentMode === 'date' ? 'counter' : 'date';
  }

 
  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  searchProgram(): void {
    console.log('Поиск:', this.selectedLocation, this.selectedDate, this.selectedMembers);
  }
  
  openConsultation(): void {
    console.log('Открыть консультацию');
  }
}