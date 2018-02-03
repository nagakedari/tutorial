import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.css']
})
export class EcosystemComponent implements OnInit {

  nextRoute : any;
previousRoute : any;
  constructor() { 
    this.nextRoute = 'howitworks';
    this.previousRoute = 'blockchain';
  }


  ngOnInit() {
  }

}
