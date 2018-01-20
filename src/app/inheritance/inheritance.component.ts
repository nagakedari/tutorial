import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.css']
})
export class InheritanceComponent implements OnInit {

  nextRoute : any;
  previousRoute : any;
  constructor() { 
    this.previousRoute = 'globalobject';
    //this.nextRoute = 'inheritance';
  }

  ngOnInit() {
  }

}
