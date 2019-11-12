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

  constructor(private scionService: ScionService) { }

  ngOnInit() {
    this.getScions();
  }
  
  getScions(): void{
    this.scionService.getScions()
      .subscribe(scions => this.scions = scions);
  }


}
