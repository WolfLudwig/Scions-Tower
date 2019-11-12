import { Component, OnInit } from '@angular/core';
import { Scion } from '../scion';
import { ScionService } from '../scion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scions: Scion[] =[];

  constructor(private scionService: ScionService) { }

  ngOnInit() {
    this.getScions();
  }

  getScions(): void{
    this.scionService.getScions()
      .subscribe(scions => this.scions = scions.slice(1,5));
  }

}
