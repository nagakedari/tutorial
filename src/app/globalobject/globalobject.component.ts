import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globalobject',
  templateUrl: './globalobject.component.html',
  styleUrls: ['./globalobject.component.css']
})
export class GlobalobjectComponent implements OnInit {

   nextRoute : any;
  previousRoute : any;
  constructor() { 
    this.previousRoute = 'variabletypes';
    this.nextRoute = 'inheritance';
  }

  ngOnInit() {
  }

}
