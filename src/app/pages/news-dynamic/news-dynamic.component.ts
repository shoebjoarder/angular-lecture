import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsPostService } from '../../services/news-post/news-post.service';
import IPost from '../../model/post';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      this.getNewsPost(this.paramId).subscribe(
        (response: IPost) => (this.newsPost = response)
      );
    }

    // * Alternative using Observables
    // this.route.paramMap.subscribe((params) => {
    //   this.paramId = params.get('id');
    // });
  }

  getNewsPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
