import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPet, petsList } from 'src/pets';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
})
export class PetDetailComponent implements OnInit {
  pet: IPet | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const routePetId = Number(routeParams.get('id'));
    // Find the product that correspond with the id provided in route.
    this.pet = petsList.find((p) => p.id === routePetId);
  }
}
