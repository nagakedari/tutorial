import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solidity',
  templateUrl: './solidity.component.html',
  styleUrls: ['./solidity.component.css']
})
export class SolidityComponent implements OnInit {

  nextRoute : any;
  previousRoute : any;
  constructor() { 
    this.previousRoute = 'smartcontract';
    this.nextRoute = 'variabletypes';
  }

  ngOnInit() {
  }

}
