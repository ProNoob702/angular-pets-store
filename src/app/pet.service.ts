import { Injectable } from '@angular/core';
import { IPet, petsList } from 'src/pets';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  pets: IPet[] = petsList;
  constructor() {}

  getPets() {
    return this.pets;
  }

  addPet(newPet: IPet) {
    this.pets.push(newPet);
  }

  removePet(petId: number) {
    const petIndex = this.pets.findIndex((x) => x.id === petId);
    this.pets.splice(petIndex, 1);
  }

  clearPets() {
    this.pets = [];
  }
}
