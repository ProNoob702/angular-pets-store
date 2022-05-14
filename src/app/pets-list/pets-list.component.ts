import { Component, OnInit } from '@angular/core';
import { petsList } from 'src/pets';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  pets = petsList;
  constructor() {}

  ngOnInit(): void {}

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
