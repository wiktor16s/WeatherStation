import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
//import { from } from 'rxjs';

@Component({
  selector: 'ws-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(DropdownComponent) child;

  constructor() { }

  ngOnInit() {
  }
}
