import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgramCard } from './program-card.interface';
import { WidgetMode } from './widget-mode.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  currentMode: WidgetMode = 'date';
  currentDate: string = '';
  count: number = 0;
  liveInputValue: string = '';
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedMembers: string = '';
  companyName: string = 'РУМТИБЕТ';
  
  programCards: ProgramCard[] = [
    { 
      id: 1, 
      title: 'Опытный гид', 
      image: 'expert-guide.svg', 
      description: 'Гид с опытом.' 
    },
    { 
      id: 2, 
      title: 'Безопасность', 
      image: 'safe-hiking.svg', 
      description: 'безопасная цена.' 
    },
    { 
      id: 3, 
      title: 'Комфорт', 
      image: 'loyal-prices.svg', 
      description: 'лояльная цена.' 
    }
  ];
  
  private timerInterval: number | undefined;
  
  ngOnInit(): void {
    this.updateDate();
    this.startTimer();
    this.simulateLoading();
  }
  
  ngOnDestroy(): void {
    this.stopTimer();
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
  
  }
  
  openConsultation(): void {
  
  }
  
  private updateDate(): void {
    const now: Date = new Date();
    const dateString: string = now.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const timeString: string = now.toLocaleTimeString('ru-RU');
    this.currentDate = `${dateString}, ${timeString}`;
  }
  
  private startTimer(): void {
    this.timerInterval = window.setInterval((): void => {
      this.updateDate();
    }, 1000);
  }
  
  private stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  
  private simulateLoading(): void {
    window.setTimeout((): void => {
      this.isLoading = false;
    }, 2000);
  }
}