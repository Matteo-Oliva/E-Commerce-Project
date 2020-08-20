import {MaterialModule} from './shared/libraries/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './features/layout/menu/menu.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FooterComponent } from './features/layout/footer/footer.component';
  

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgMatSearchBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
