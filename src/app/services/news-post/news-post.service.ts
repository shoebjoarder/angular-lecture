import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IPost from '../../model/post';

@Injectable({
  providedIn: 'root',
})
export class NewsPostService {
  // * Dependency injection
  http = inject(HttpClient);

  getNewsPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}