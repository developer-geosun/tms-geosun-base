import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService, Theme } from '../../core/services/theme.service';
import { ConfigService } from '../../core/services/config.service';
import { LanguageService, Language } from '../../core/services/language.service';

/**
 * Компонент панелі інструментів (toolbar)
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class ToolbarComponent {
  // Використовуємо async pipe для автоматичної відписки
  theme$ = this.themeService.theme$;
  language$ = this.languageService.language$;
  currentLanguage: Language = 'uk';
  
  // Доступні мови
  languages: { code: Language; label: string }[] = [
    { code: 'uk', label: 'UA' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' }
  ];

  constructor(
    private themeService: ThemeService,
    public configService: ConfigService,
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {
    // Підписуємося на зміни мови
    this.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  /**
   * Перемикає тему
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Отримує поточну тему для aria-label
   */
  getThemeLabel(theme: Theme | null): string {
    if (theme === 'light') {
      return this.translateService.instant('theme.switchToDark');
    }
    return this.translateService.instant('theme.switchToLight');
  }

  /**
   * Отримує заголовок для кнопки теми
   */
  getThemeTitle(theme: Theme | null): string {
    if (theme === 'light') {
      return this.translateService.instant('theme.darkTheme');
    }
    return this.translateService.instant('theme.lightTheme');
  }

  /**
   * Отримує іконку для кнопки теми
   */
  getThemeIcon(theme: Theme | null): string {
    return theme === 'light' ? 'dark_mode' : 'light_mode';
  }

  /**
   * Змінює мову інтерфейсу
   */
  changeLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  /**
   * Отримує локалізовану назву секції мови у меню налаштувань
   */
  getLanguageSectionTitle(): string {
    return this.getSettingsSectionTitle('settings.languageSection');
  }

  /**
   * Отримує локалізовану назву секції теми у меню налаштувань
   */
  getThemeSectionTitle(): string {
    return this.getSettingsSectionTitle('settings.themeSection');
  }

  private getSettingsSectionTitle(key: 'settings.languageSection' | 'settings.themeSection'): string {
    const translated = this.translateService.instant(key);
    if (translated !== key) {
      return translated;
    }

    const fallbackByLanguage: Record<Language, Record<'settings.languageSection' | 'settings.themeSection', string>> = {
      uk: {
        'settings.languageSection': 'Мова',
        'settings.themeSection': 'Тема'
      },
      en: {
        'settings.languageSection': 'Language',
        'settings.themeSection': 'Theme'
      },
      ru: {
        'settings.languageSection': 'Язык',
        'settings.themeSection': 'Тема'
      }
    };

    return fallbackByLanguage[this.currentLanguage][key];
  }
}

