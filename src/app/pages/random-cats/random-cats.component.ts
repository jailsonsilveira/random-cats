import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-cats',
  templateUrl: './random-cats.component.html',
  styleUrls: ['./random-cats.component.scss']
})
export class RandomCatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("Random cats")
  }

}
