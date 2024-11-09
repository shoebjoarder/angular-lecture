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
      // * Comment the lines 46-55 and uncomment lines 58-62 to
      // * use Promises instead of Observables
      // * With Observables
      this.newsPostService.getNewsPost(this.paramId).subscribe({
        next: (response: IPost) => (this.newsPost = response),
        error: (error) => {
          console.error('Error in component:', error);
        },
        complete: () => {
          console.log('Request completed successfully');
        },
      });

      // * With Promises
      // this.newsPostService
      //   .getNewsPostPromise(this.paramId)
      //   .then((response: IPost) => (this.newsPost = response))
      //   .catch((error) => {
      //     console.error('Error fetching post', error);
      //   });
    }
  }
}
