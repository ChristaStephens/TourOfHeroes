import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
/*
read as information to be exported
information must match exported file when placing
into export class
*/
export class HeroesComponent implements OnInit {
hero: Hero = {
  Id: 1,
  Name: "Windstorm"
};
  constructor() { }

  ngOnInit() {
  }
}
