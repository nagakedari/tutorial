import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  ethereumTopicTabs = [];

  constructor(){
    this.ethereumTopicTabs = [
        {name : " Introduction", path : "intro"},
        {name : " What is Blockchain", path : "blockchain"},
        {name : " Ethereum EcoSystem", path : "eco"},
        {name : " How it works?", path : "howitworks"},
        {name : " Working with GETH", path : "geth"}
    ];
  }

  ngOnInit() {
  }

}
