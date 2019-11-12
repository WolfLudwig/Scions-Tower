import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import {Scion} from '../scion'
import { ScionService } from '../scion.service'

@Component({
  selector: 'app-scion-detail',
  templateUrl: './scion-detail.component.html',
  styleUrls: ['./scion-detail.component.css']
})
export class ScionDetailComponent implements OnInit {
  @Input() scion: Scion;

  constructor(
    private route: ActivatedRoute,
    private scionService: ScionService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getScion();
  }

  getScion(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.scionService.getScion(id)
    .subscribe(scion => this.scion = scion);
  }

}
