import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetsListComponent } from './pets-list/pets-list.component';

const routes: Routes = [
  { path: '', component: PetsListComponent },
  { path: 'pet/:id', component: PetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
