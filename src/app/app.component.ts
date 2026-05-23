import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProgramCard {
  id: number;
  title: string;
  image: string;
  description: string;
}

type WidgetMode = 'date' | 'counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  

  
  public isLoading: boolean = true;
  public currentMode: WidgetMode = 'date';
  public currentDate: string = '';
  public count: number = 0;
  public liveInputValue: string = '';
  public selectedLocation: string = '';
  public selectedDate: string = '';
  public selectedMembers: string = '';
  public companyName: string = 'РУМТИБЕТ';
  
  public programCards: ProgramCard[] = [
    { 
      id: 1, 
      title: 'Опытный гид', 
      image: '/image/expert-guide.svg', 
      description: 'Гид с опытом.' 
    },
    { 
      id: 2, 
      title: 'Безопасность', 
      image: '/image/safe-hiking.svg', 
      description: 'безопасная цена.' 
    },
    { 
      id: 3, 
      title: 'Комфорт', 
      image: '/image/loyal-prices.svg', 
      description: 'лояльная цена.' 
    }
  ];
  
  
  private timerInterval: number | undefined;
  

  public ngOnInit(): void {
    this.updateDate();
    this.startTimer();
    this.simulateLoading();
  }
  
  public ngOnDestroy(): void {
    this.stopTimer();
  }

  
  public toggleWidgetMode(): void {
    this.currentMode = this.currentMode === 'date' ? 'counter' : 'date';
  }
  
  public increment(): void {
    this.count++;
  }
  
  public decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
  
  public searchProgram(): void {
    console.log('Поиск:', {
      location: this.selectedLocation,
      date: this.selectedDate,
      members: this.selectedMembers
    });
  }
  
  public openConsultation(): void {
    console.log('Открыть консультацию');
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
    this.timerInterval = setInterval((): void => {
      this.updateDate();
    }, 1000);
  }
  
  private stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  
  private simulateLoading(): void {
    setTimeout((): void => {
      this.isLoading = false;
    }, 2000);
  }
}