import { Component } from '@angular/core';
import { IFruit } from './model/grocery';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // * String
  groceryItem: string = 'apple';

  // * Array of strings
  groceryList: string[] = ['banana', 'oats', 'milk', 'chia seeds'];

  // * Structured object -> Interface
  groceryListOptions: IFruit[] = [
    { fruitName: 'apple', color: 'red' },
    { fruitName: 'kiwi', color: 'green' },
    { fruitName: 'papaya', color: 'yellow' },
    { fruitName: 'plum', color: 'purple' },
  ];

  // * ngStyle example
  addButtonColor: string = 'black';

  // * ngClass example
  isPrimary: boolean = true;
  isDisabled: boolean = false;

  // * Function to enter grocery item: ngModel example
  handleGroceryItemChange(event: Event): void {
    let inputElement = event.target as HTMLInputElement;
    this.groceryItem = inputElement.value;
  }
}
