import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatenetwork',
  templateUrl: './privatenetwork.component.html',
  styleUrls: ['./privatenetwork.component.css']
})
export class PrivatenetworkComponent implements OnInit {
genesisJson : any = {
                      config : {
                        chainId : 15,
                        homeSteadBlock : 0,
                        eip155Block : 0,
                        eip158Block : 0
                      },
                      difficulty : "0x20000",
                      gasLimit : "0x8000000",
                      alloc : {}
                    };
  nextRoute : any;
previousRoute : any;
  constructor() { 
    this.nextRoute = 'solidity';
    this.previousRoute = 'typesofblockchain';
  }


  ngOnInit() {
  }

}
