import { Component, OnInit } from '@angular/core';
import { IPet, petsList } from 'src/pets';
import { PetsService } from '../pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  pets = this.petsService.getPets('available');

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {}

  addAPet() {
    const newPet: IPet = {
      id: Math.floor(2 + Math.random() * (999 + 1 - 0)),
      name: 'toto',
      status: 'available',
    };
    this.petsService.addPet(newPet);
  }

  removePet(petId: number) {
    this.petsService.removePet(petId);
  }
}
