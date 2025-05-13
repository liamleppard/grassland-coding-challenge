import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Fruit } from '../../models/fruit';

@Component({
  selector: 'app-fruit-detail-dialog',
  templateUrl: './fruit-detail-dialog.component.html',
  styleUrl: './fruit-detail-dialog.component.scss',
  standalone: false
})
export class FruitDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Fruit,
  private dialogRef: MatDialogRef<FruitDetailDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
