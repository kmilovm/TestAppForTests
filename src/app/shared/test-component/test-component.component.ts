import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { hero } from '../model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.sass']
})
export class TestComponentComponent {
  heroes: Observable<hero> | any;
   constructor(heroService: HeroService)
  {
    this.heroes = heroService.getHeroes();
  }
  selectHero(currentHero: hero) {
    if (currentHero === undefined){
      throw new Error('Hero is Undefined.');
    }
  }
}
