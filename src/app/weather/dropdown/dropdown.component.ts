import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ws-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownComponent implements OnInit {
  count : number = 4;

  update(value) : void{
    this.count = value; 
  }
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom';
    config.autoClose = true;
  }

  ngOnInit() {
}

}
