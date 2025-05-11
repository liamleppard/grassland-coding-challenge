import {Injectable} from '@angular/core';
import {FruityViceService} from '../../services/fruity-vice-service';
import {BehaviorSubject} from 'rxjs';
import {Fruit} from '../../models/fruit';

@Injectable()
export class FruitTableViewModel {
  allFruits: Fruit[] = [];
  fruitData$ = new BehaviorSubject<Fruit[]>([]);
  loadingFruit$ = new BehaviorSubject<boolean>(false);

  constructor(private fruityService: FruityViceService) {
    this.fruityService.getAllFruits().subscribe({
      next: fruits => {
        this.fruitData$.next(fruits ?? []);
      },
      error: err => {
        console.error('Error loading fruits:', err);
        this.fruitData$.next([]);
      }
    });
  }
}
