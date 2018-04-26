import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

// -------------------------Components -------------
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// -------------------------Services-------------

import { NewsService } from './services/news.service';

import { RoutingComponents, AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


