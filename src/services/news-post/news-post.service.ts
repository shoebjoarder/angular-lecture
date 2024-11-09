import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import IPost from '../../model/post';

@Injectable({
  providedIn: 'root',
})
export class NewsPostService {
  // * Dependency injection
  http = inject(HttpClient);

  // * Observables
  getNewsPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  // * Promises
  getNewsPostPromise(id: string): Promise<IPost> {
    return firstValueFrom(
      this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    );
  }
}
