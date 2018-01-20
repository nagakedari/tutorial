import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solidityevents',
  templateUrl: './solidityevents.component.html',
  styleUrls: ['./solidityevents.component.css']
})
export class SolidityeventsComponent implements OnInit {

  nextRoute : any;
  previousRoute : any;
  constructor() { 
    this.previousRoute = 'wallet';
    this.nextRoute = 'intro';
  }

  ngOnInit() {
  }

}
