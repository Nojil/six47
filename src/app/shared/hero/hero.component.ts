import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js/src/typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const options = {
      strings: ["a Web Developer.", "a Teacher.", "an Entrepreneur.", "a Designer.", "a UI Engineer.", "a UX Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed('.typed', options);
  }

}
