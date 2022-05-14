import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PetAlertComponent } from './pet-alert/pet-alert.component';

@NgModule({
  declarations: [AppComponent, PetsListComponent, TopBarComponent, PetAlertComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
