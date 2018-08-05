import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private images: string[]

  constructor() { }

  ngOnInit() {

    this.images = [
      'assets/future-slide.svg',
      'assets/jumpstart-slide.svg',
      'assets/prizes-slide.svg'
    ]

  }

}
