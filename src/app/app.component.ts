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

  // * Property binding example
  groceryListTitleFromModel: string = `<h2>HTML Grocery List</h2>`;

  // * ngModel example
  // * Function to enter grocery item:
  handleGroceryItemChange(event: Event): void {
    let inputElement = event.target as HTMLInputElement;
    this.groceryItem = inputElement.value;
  }

  // * Function to add a fruit to the list using groceryItem data
  handleAddFruit() {
    if (Boolean(this.groceryItem)) {
      this.groceryList = [...this.groceryList, this.groceryItem];
      this.groceryItem = '';
    }
  }

  // * Custom function with parameters to add a grocery item to the list
  handleAddFruitName(fruit: string) {
    if (Boolean(fruit)) {
      this.groceryList = [...this.groceryList, fruit];
    }
  }
}
