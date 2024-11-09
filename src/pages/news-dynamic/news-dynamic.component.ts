import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-dynamic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-dynamic.component.html',
  styleUrl: './news-dynamic.component.css',
})
export class NewsDynamicComponent implements OnInit {
  paramId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');

    // * Alternative using Observables
    // this.route.paramMap.subscribe((params) => {
    //   this.paramId = params.get('id');
    // });
  }
}
