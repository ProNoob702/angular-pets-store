import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { AppTopBarComponent } from './app-top-bar/top-bar.component';

@NgModule({
  declarations: [AppComponent, PetsListComponent, AppTopBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
