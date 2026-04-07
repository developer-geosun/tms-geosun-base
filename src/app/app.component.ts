import { Component, OnInit } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'tms-geosun-base';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Ініціалізація мови при старті додатку
    // LanguageService автоматично визначить та встановить мову
  }
}
