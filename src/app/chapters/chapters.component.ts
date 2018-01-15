import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  ethereumTopicTabs = [];
  selectedTabIndex : any;

  constructor(){
    this.ethereumTopicTabs = [
        {name : " Introduction", path : "intro"},
        {name : " What is Blockchain", path : "blockchain"},
        {name : " Ethereum EcoSystem", path : "eco"},
        {name : " How it works?", path : "howitworks"},
        {name : " Working with GETH", path : "geth"},
        {name : " Types Of Blockchain and Networks", path : "typesofblockchain"},
        {name : " Creating A Private Network", path : "privatenetwork"},
        {name : " Mining A Private Network", path : "mining"},
        {name : " Understanding Smart Contract", path : "smartcontract"}
    ];
  }

  selectedTab(tabIndex : any) {
    this.selectedTabIndex = tabIndex;
  }

  ngOnInit() {
  }

}
