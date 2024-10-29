import { Component } from '@angular/core';
import { IFruit } from './model/grocery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // **********************************************************
  // * Primitive types ****************************************
  // **********************************************************

  // * String type
  groceryItem: string = 'apple';

  // * Boolean
  isAdded: boolean = true;

  // * Number
  countItems: number = 0;

  // **********************************************************
  // * Special types ******************************************
  // **********************************************************

  // * HTML/CSS
  groceryListTitleHTML: any = `<h2 style={{ color: "red" }}>HTML Grocery List</h2>`;

  // **********************************************************
  // * Complex types ******************************************
  // **********************************************************

  // * Array
  groceryList: string[] = ['banana', 'oats', 'milk', 'chia seeds'];

  // * Tuple
  groceryItemTuple: [string, number] = ['banana', 1.29];

  // * Object
  groceryItemObject: { fruitName: string; color: string; price: number } = {
    fruitName: 'banana',
    color: 'yellow',
    price: 1.29,
  };

  // * Interface
  groceryListOptions: IFruit[] = [
    { fruitName: 'apple', color: 'red' },
    { fruitName: 'kiwi', color: 'green' },
    { fruitName: 'papaya', color: 'yellow' },
    { fruitName: 'plum', color: 'purple' },
  ];

  // **********************************************************
  // * Other types ********************************************
  // **********************************************************

  // * Date
  groceryPurchaseDate: Date = new Date();
}
