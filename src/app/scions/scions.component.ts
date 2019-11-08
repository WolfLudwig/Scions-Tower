import { Component, OnInit } from '@angular/core';
import { Scion } from '../scion';
import { SCIONS } from '../mock-scions';

@Component({
  selector: 'app-scions',
  templateUrl: './scions.component.html',
  styleUrls: ['./scions.component.css']
})
export class ScionsComponent implements OnInit {

  scions = SCIONS;

  scion: Scion = {id: 1, name: "louissoix", lastname: "leveilleur", race: "elezen", job: "mage blanc"};

  selectedScion: Scion;

  constructor() { }

  onSelect(scion : Scion): void {
    this.selectedScion = scion;
  }

  ngOnInit() {
  }

}
