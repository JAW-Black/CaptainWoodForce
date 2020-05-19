import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { NevaehComponent } from './kids/nevaeh/nevaeh.component';
import { AlexComponent } from './kids/alex/alex.component';
import { MaddexComponent } from './kids/maddex/maddex.component';
import { LillianaComponent } from './kids/lilliana/lilliana.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NevaehComponent,
    AlexComponent,
    MaddexComponent,
    LillianaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
