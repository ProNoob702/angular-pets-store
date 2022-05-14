import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPet } from 'src/pets';

@Component({
  selector: 'app-pet-alert',
  templateUrl: './pet-alert.component.html',
  styleUrls: ['./pet-alert.component.scss'],
})
export class PetAlertComponent implements OnInit {
  @Input() pet!: IPet;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
