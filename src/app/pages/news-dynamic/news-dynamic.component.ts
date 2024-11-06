import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsPostService } from '../../services/news-post/news-post.service';
import IPost from '../../model/post';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-news-dynamic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-dynamic.component.html',
  styleUrl: './news-dynamic.component.css',
})
export class NewsDynamicComponent implements OnInit {
  paramId: string = '';
  newsPost: IPost | null = null;

  // * Dependency injection from Angular 18
  route = inject(ActivatedRoute);
  newsPostService = inject(NewsPostService);

  ngOnInit(): void {
    let urlId = this.route.snapshot.paramMap.get('id');
    if (urlId !== null) {
      this.paramId = urlId;
      // * With Observables
      // * interval -> An RxJS function creates an Observable that
      // *             emits values every 5 seconds.
      interval(5000)
        .pipe(
          // * switch -> Every 5 seconds, switchMap cancels any
          // *           previous request (if still active) and calls
          switchMap(() =>
            this.newsPostService.getNewsPost(
              (Math.floor(Math.random() * 100) + 1).toString()
            )
          )
        )
        // * subscribe -> Every time getNewsPost() returns new data,
        // *              the next callback updates
        .subscribe({
          next: (response: IPost) => {
            this.newsPost = response;
            console.log('Updated news post:', response);
          },
          error: (error) => {
            console.error('Error in component:', error);
          },
          complete: () => {
            console.log('Request completed successfully');
          },
        });

      // * With Promises
      // * No built-in way to stop or control this flow based
      // * on other conditions, i.e., no stream control
      // setInterval(() => {
      //   this.newsPostService
      //     .getNewsPostPromise(this.paramId)
      //     .then((response: IPost) => {
      //       this.newsPost = response;
      //       console.log('Updated news post:', response);
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching post', error);
      //     });
      // }, 5000);
    }
  }
}
