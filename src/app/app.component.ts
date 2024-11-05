// * Angular modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// * Interfaces
import { IFruit } from './model/grocery';

// * Components
import FruitbuttonComponent from './fruitbutton/fruitbutton.component';
import GroceryInputComponent from './component/grocery-input/grocery-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FruitbuttonComponent,
    GroceryInputComponent,
    CommonModule,
    FormsModule,
  ],
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

  // * Component lifecycle example
  hide: boolean = false;

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

  handleToggleInput() {
    this.hide = !this.hide;
  }
}
