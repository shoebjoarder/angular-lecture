import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grocery-input.component.html',
  styleUrl: './grocery-input.component.css',
})
export default class GroceryInputComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() groceryItem: string = '';

  @Output() groceryItemChange: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {
    console.log('constructor executed!');
  }

  ngOnInit(): void {
    console.log('ngOnInit executed!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges executed!', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy executed!');
  }

  handleInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.groceryItem = newValue;
    this.groceryItemChange.emit(newValue);
  }
}
