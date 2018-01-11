import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geth',
  templateUrl: './geth.component.html',
  styleUrls: ['./geth.component.css']
})
export class GethComponent implements OnInit {

  nextRoute : any;
previousRoute : any;
  constructor() { 
    this.nextRoute = 'typesofblockchain';
    this.previousRoute = 'howitworks';
  }


  ngOnInit() {
  }

}
