import { Component, OnInit, Input } from '@angular/core';
import {Scion} from '../scion'

@Component({
  selector: 'app-scion-detail',
  templateUrl: './scion-detail.component.html',
  styleUrls: ['./scion-detail.component.css']
})
export class ScionDetailComponent implements OnInit {
  @Input() scion: Scion;

  constructor() { }

  ngOnInit() {
  }

}
