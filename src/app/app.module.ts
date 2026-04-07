import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';

// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Layout компоненти
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Shared компоненти
import { LogoComponent } from './shared/components/logo/logo.component';
import { SocialIconComponent } from './shared/components/social-icon/social-icon.component';

// Pages компоненти
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StopServiceComponent } from './pages/stop-service/stop-service.component';

// Factory для HttpLoader
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    // Layout
    ToolbarComponent,
    FooterComponent,
    // Shared
    LogoComponent,
    SocialIconComponent,
    // Pages
    MainComponent,
    NotFoundComponent,
    StopServiceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'uk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
