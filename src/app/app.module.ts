import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Certifique-se de que está importando o HttpClientModule

import { AppComponent } from './app.component';
import { ListaCatsComponent } from './lista-cats/lista-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }