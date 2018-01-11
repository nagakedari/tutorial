import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miningprivatenetwork',
  templateUrl: './miningprivatenetwork.component.html',
  styleUrls: ['./miningprivatenetwork.component.css']
})
export class MiningprivatenetworkComponent implements OnInit {


previousRoute : any;
  constructor() { 
    this.previousRoute = 'privatenetwork';
  }
  ngOnInit() {
  }

}
