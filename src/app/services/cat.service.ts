import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private urlBase = "https://api.thecatapi.com/v1/";

  constructor(private http: HttpClient) { }

  getRandomCat() {
    return this.http.get(`${this.urlBase}images/search`)
            
  }
}
