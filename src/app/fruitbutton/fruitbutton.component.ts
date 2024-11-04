import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fruitbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruitbutton.component.html',
  styleUrl: './fruitbutton.component.css',
})
export default class FruitbuttonComponent {
  @Input() fruitName: string = '';
  @Input() fruitColor: string = '';

  @Output() handleAddFruitName: EventEmitter<string> = new EventEmitter();

  addFruit() {
    this.handleAddFruitName.emit(this.fruitName);
  }
}
