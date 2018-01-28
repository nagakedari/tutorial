import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  inputs: ['next','previous']
})
export class NavigationComponent implements OnInit {
next: string;
previous: string;
  constructor() { }

  ngOnInit() {
  }

}
