import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/domain/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-random-cats',
  templateUrl: './random-cats.component.html',
  styleUrls: ['./random-cats.component.scss']
})
export class RandomCatsComponent implements OnInit {

  cat: Cat;
  loading = false;

  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.getRandomCat();
  }

  nextCat() {

  }

  getRandomCat() {
    this.loading = true;
    this.catService.getRandomCat()
      .subscribe(cats => {
        this.cat = cats[0];
        this.loading = false;
      });
  }
}