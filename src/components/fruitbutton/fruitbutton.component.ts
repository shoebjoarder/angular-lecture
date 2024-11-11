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

  @Output() onAddFruit: EventEmitter<string> = new EventEmitter<string>();

  // @Output() onAddFruit: EventEmitter<{ name: string; color: string }> =
  //   new EventEmitter<{
  //     name: string;
  //     color: string;
  //   }>();
}
