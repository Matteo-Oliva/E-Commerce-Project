import { MaterialModule } from './shared/libraries/material/material.module';
import { InMemoryDataService } from './features/products/services/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './features/account/login/login.component';
import { MenuComponent } from './features/layout/menu/menu.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FooterComponent } from './features/layout/footer/footer.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgMatSearchBarModule,     
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
