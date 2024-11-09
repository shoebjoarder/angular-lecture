import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule, 
    // * Scenario: nested route with children property
    // * Uncomment line below
    // RouterModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {

  // * Scenario: nested route with children property
  // * Uncomment lines below
  // constructor(private router: Router) {}

  // changeRoute(routeName: string) {
  //   this.router.navigate([routeName]);
  // }
}
