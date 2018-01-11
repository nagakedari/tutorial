import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
nextRoute : any;
previousRoute : any;
  constructor() { 
    this.nextRoute = 'eco';
    this.previousRoute = 'intro';
  }

  ngOnInit() {
  }

}
