import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartcontract',
  templateUrl: './smartcontract.component.html',
  styleUrls: ['./smartcontract.component.css']
})
export class SmartcontractComponent implements OnInit {

  previousRoute : any;
  constructor() { 
    this.previousRoute = 'mining';
  }
  ngOnInit() {
  }

}
