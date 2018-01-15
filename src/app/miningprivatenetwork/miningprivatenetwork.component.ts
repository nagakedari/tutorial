import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miningprivatenetwork',
  templateUrl: './miningprivatenetwork.component.html',
  styleUrls: ['./miningprivatenetwork.component.css']
})
export class MiningprivatenetworkComponent implements OnInit {

nextRoute : any;
previousRoute : any;
  constructor() {
    this.nextRoute = 'smartcontract'; 
    this.previousRoute = 'privatenetwork';
  }
  ngOnInit() {
  }

}
