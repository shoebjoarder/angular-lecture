import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
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

  // httpHandler: HttpHandler = new HttpXhrBackend({
  //   build: () => new XMLHttpRequest(),
  // });

  // // * Without dependency injection
  // route: ActivatedRoute;
  // http: HttpClient;
  // constructor() {
  //   this.route = new ActivatedRoute();
  //   this.http = new HttpClient(this.httpHandler);
  // }

  // // * With dependency injection
  // constructor(
  //   private route: ActivatedRoute,
  //   private http: HttpClient,
  // ) {}

  // * Dependency injection from Angular 18
  route = inject(ActivatedRoute);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');
    if (this.paramId !== null) {
      // * Comment the lines 46-55 and uncomment lines 58-62 to
      // * use Promises instead of Observables
      // * With Observables
      this.getNewsPost(this.paramId).subscribe({
        next: (response: IPost) => (this.newsPost = response),
        error: (error) => {
          console.error('Error in component:', error);
        },
        complete: () => {
          console.log('Request completed successfully');
        },
      });

      // * With Promises
      // this.getNewsPostPromise(this.paramId)
      //   .then((response: IPost) => (this.newsPost = response))
      //   .catch((error) => {
      //     console.error('Error fetching post', error);
      //   });
    }
  }

  // * Function with Observable
  getNewsPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  // * Function with Promise
  getNewsPostPromise(id: string): Promise<IPost> {
    return firstValueFrom(
      this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    );
  }
}
