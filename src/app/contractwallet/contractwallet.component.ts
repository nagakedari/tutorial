import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractwallet',
  templateUrl: './contractwallet.component.html',
  styleUrls: ['./contractwallet.component.css']
})
export class ContractwalletComponent implements OnInit {

  nextRoute : any;
  previousRoute : any;
  constructor() { 
    this.previousRoute = 'inheritance';
    this.nextRoute = 'events';
  }

  ngOnInit() {
  }

}
