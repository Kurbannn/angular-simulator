import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../assets/services/MessageService';
import { LocalStorageService } from '../assets/services/LocalStorageService';
import { IMessage } from '../assets/services/IMessage';
import { MessageType } from '../enums/MessageType.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private messageService = inject(MessageService);
  private localStorageService = inject(LocalStorageService);

  isLoading = false;
  companyName = 'ГОРНЫЙ СЛЕД';
  currentMode: 'date' | 'counter' = 'date';
  currentDate = '17.07.2026';
  count = 0;

  selectedLocation = '';
  selectedDate = '';
  selectedMembers = '';

  get messages(): IMessage[] {
    return this.messageService.activeMessages as IMessage[];
  }

  programCards = [
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
      description: 'Безопасная цена.' 
    },
    { 
      id: 3, 
      title: 'Комфорт', 
      image: 'loyal-prices.svg', 
      description: 'Лояльная цена.' 
    }
  ];

  destinations = [
    { 
      id: 1, 
      title: 'Озеро возле гор', 
      subtitle: 'романтическое приключение', 
      price: '480 $', 
      rating: 4.9, 
      image: 'lake-dest.jpg' 
    },
    { 
      id: 2, 
      title: 'Ночь в горах', 
      subtitle: 'в компании друзей', 
      price: '500 $', 
      rating: 4.5, 
      image: 'sky-star.jpg' 
    },
    { 
      id: 3, 
      title: 'Растяжка в горах', 
      subtitle: 'для тех, кто заботится о себе', 
      price: '230 $', 
      rating: 5.0, 
      image: 'yoga-lady.png' 
    }
  ];

  blogArticles = [
    { 
      id: 1, 
      title: 'Красивая Италия, какая она в реальности?', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.', 
      date: '01/04/2023', 
      image: 'big-canyon.jpg' 
    },
    { 
      id: 2, 
      title: 'Долой сомнения! Весь мир открыт для вас!', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации... независимые способы реализации соответствующих...', 
      date: '01/04/2023', 
      image: 'fly-cloud.png' 
    },
    { 
      id: 3, 
      title: 'Как подготовиться к путешествию в одиночку?', 
      description: 'Для современного мира базовый вектор развития предполагает.', 
      date: '01/04/2023', 
      image: 'spanish-favels.png' 
    },
    { 
      id: 4, 
      title: 'Индия ... летим?', 
      description: 'Для современного мира базовый.', 
      date: '01/04/2023', 
      image: 'taj-mahal.png' 
    }
  ];

  ngOnInit(): void {
    this.selectedLocation = this.localStorageService.getItem<string>('selectedLocation') ?? '';
    this.selectedDate = this.localStorageService.getItem<string>('selectedDate') ?? '';
    this.selectedMembers = this.localStorageService.getItem<string>('selectedMembers') ?? '';
    this.count = this.localStorageService.getItem<number>('count') ?? 0;
    
    const savedMode = this.localStorageService.getItem<'date' | 'counter'>('currentMode');
    if (savedMode) {
      this.currentMode = savedMode;
    }
  }

  toggleWidgetMode(): void {
    this.currentMode = this.currentMode === 'date' ? 'counter' : 'date';
    this.localStorageService.setItem('currentMode', this.currentMode);
  }

  increment(): void { 
    this.count++; 
    this.localStorageService.setItem('count', this.count);
  }
  
  decrement(): void { 
    if (this.count > 0) {
      this.count--; 
      this.localStorageService.setItem('count', this.count);
    }
  }

  saveFormState(): void {
    this.localStorageService.setItem('selectedLocation', this.selectedLocation);
    this.localStorageService.setItem('selectedDate', this.selectedDate);
    this.localStorageService.setItem('selectedMembers', this.selectedMembers);
  }

  showRatingAlert(): void {
    this.messageService.addMessage('Рейтинг успешно обновлен!', MessageType.Success); 
  }

  openArticle(title: string): void {
    console.log(`Открытие статьи: ${title}`);
  }

  handleCloseMessage(id: number): void {
    this.messageService.closeMessage(id);
  }
}