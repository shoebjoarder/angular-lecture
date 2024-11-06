import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsPostService } from '../../services/news-post/news-post.service';
import IPost from '../../model/post';

@Component({
  selector: 'app-news-dynamic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-dynamic.component.html',
  styleUrl: './news-dynamic.component.css',
})
export class NewsDynamicComponent implements OnInit {
  paramId: string | null = null;
  newsPost: IPost | null = null;

  // * Dependency injection from Angular 18
  route = inject(ActivatedRoute);
  newsPostService = inject(NewsPostService);

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');
    
    if (this.paramId !== null) {
      this.newsPostService
        .getNewsPost(this.paramId)
        .subscribe((response: IPost) => 
          (this.newsPost = response));
    }
  }
}
