import { Component, OnInit } from '@angular/core';
import { Scion } from '../scion';
import { ScionService } from '../scion.service';

@Component({
  selector: 'app-scions',
  templateUrl: './scions.component.html',
  styleUrls: ['./scions.component.css']
})
export class ScionsComponent implements OnInit {

  scions: Scion[];

  scion: Scion = {id: 1, name: "louissoix", lastname: "leveilleur", race: "elezen", job: "mage blanc"};

  selectedScion: Scion;

  constructor(private scionService: ScionService) { }

  getScions(): void{
    this.scionService.getScions()
      .subscribe(scions => this.scions = scions);
  }
  onSelect(scion : Scion): void {
    this.selectedScion = scion;
  }

  ngOnInit() {
    this.getScions();
  }

}
