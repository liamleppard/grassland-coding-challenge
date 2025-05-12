import { Component, OnInit } from '@angular/core';
import { FruitTableViewModel } from './fruit-table-view-model';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Fruit } from '../../models/fruit';
import { FruitDetailDialogComponent } from '../fruit-detail-dialog/fruit-detail-dialog.component';

@Component({
    selector: 'app-fruit-table',
    templateUrl: './fruit-table.component.html',
    styleUrls: ['./fruit-table.component.scss'],
    providers: [FruitTableViewModel],
    standalone: false
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'genus', 'calories', 'carbohydrates', 'sugar'];
  filterText$ = new BehaviorSubject<string>('');
  sortOption$ = new BehaviorSubject<string>('');

  filteredAndSortedFruits$ = combineLatest([
    this.viewModel.fruitData$,
    this.filterText$,
    this.sortOption$
  ]).pipe(
    map(([fruits, filter, sort]) => {
      const lowerFilter = filter.toLowerCase().trim();

      const filtered = fruits.filter(f =>
        f.name.toLowerCase().includes(lowerFilter) ||
        f.genus.toLowerCase().includes(lowerFilter) ||
        f.family.toLowerCase().includes(lowerFilter) ||
        f.order.toLowerCase().includes(lowerFilter)
      );

      const sorted = filtered.sort((a, b) => {
        switch (sort) {
          case 'nameAsc': return a.name.localeCompare(b.name);
          case 'nameDesc': return b.name.localeCompare(a.name);
          case 'carbsAsc': return a.nutritions.carbohydrates - b.nutritions.carbohydrates;
          case 'carbsDesc': return b.nutritions.carbohydrates - a.nutritions.carbohydrates;
          default: return 0;
        }
      });

      return sorted;
    })
  );

  constructor(public viewModel: FruitTableViewModel, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(fruit: Fruit): void {
    this.dialog.open(FruitDetailDialogComponent, {
      data: fruit,
    });
  }

  onFilterChange(value: string) {
    this.filterText$.next(value);
  }

  onSortChange(option: string) {
    this.sortOption$.next(option);
  }
}
