import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typesofblockchain',
  templateUrl: './typesofblockchain.component.html',
  styleUrls: ['./typesofblockchain.component.css']
})
export class TypesofblockchainComponent implements OnInit {

  nextRoute : any;
previousRoute : any;
  constructor() { 
    this.nextRoute = 'privatenetwork';
    this.previousRoute = 'geth';
  }

  ngOnInit() {
  }

}
