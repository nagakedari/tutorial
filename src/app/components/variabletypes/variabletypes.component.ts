import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variabletypes',
  templateUrl: './variabletypes.component.html',
  styleUrls: ['./variabletypes.component.css']
})
export class VariabletypesComponent implements OnInit {

   nextRoute : any;
  previousRoute : any;
  constructor() { 
    this.previousRoute = 'solidity';
    this.nextRoute = 'globalobject';
  }

  ngOnInit() {
  }

}
