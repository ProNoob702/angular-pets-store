import { Injectable } from '@angular/core';
import { IPet, petsList } from 'src/pets';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoDuplicatesByKey } from 'src/utils/checks.utils';

const apiBaseUrl = 'https://petstore.swagger.io/v2';

const headers: HttpHeaders['headers'] = {
  'Content-Type': 'application/json',
  api_key: 'special-key',
};

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  pets: IPet[] = [];

  constructor(private http: HttpClient) {}

  getPets(status: IPet['status']) {
    const url = `${apiBaseUrl}/pet/findByStatus?status=${status}`;
    return this.http.get<IPet[]>(url, { headers: headers });
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
