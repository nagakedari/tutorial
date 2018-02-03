import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})

export class IntroductionComponent implements OnInit {
nextRoute: any;
  constructor() {
    this.nextRoute= 'blockchain';
   }

  ngOnInit() {
  }

}
