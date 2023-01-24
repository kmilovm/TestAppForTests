import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
  useFactory: () => new HeroService(), deps: []
})
export class HeroService {
  constructor() { }

  getHeroes() {
    return HEROES.filter(hero => hero.rating > 1);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
