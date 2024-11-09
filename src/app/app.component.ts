import { Component } from '@angular/core';
import { GroceryListComponent } from '../pages/grocery-list/grocery-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GroceryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
