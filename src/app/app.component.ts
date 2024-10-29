import { Component } from '@angular/core';
import { IFruit } from './model/grocery';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // * String
  groceryItem: string = 'apple';

  // * Array of strings
  groceryList: string[] = [
    'banana', 'oats', 'milk', 'chia seeds'
  ];

  // * Structured object -> Interface
  groceryListOptions: IFruit[] = [
    { fruitName: 'apple', color: 'red' },
    { fruitName: 'kiwi', color: 'green' },
    { fruitName: 'papaya', color: 'yellow' },
    { fruitName: 'plum', color: 'purple' },
  ];
}
