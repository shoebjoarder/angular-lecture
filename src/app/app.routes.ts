import { Routes } from '@angular/router';
import { GroceryListComponent } from '../pages/grocery-list/grocery-list.component';
import { NewsComponent } from '../pages/news/news.component';
import { NewsPathComponent } from '../pages/news-path/news-path.component';
import { NewsDynamicComponent } from '../pages/news-dynamic/news-dynamic.component';

export const routes: Routes = [
  { path: '', component: GroceryListComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/path', component: NewsPathComponent },
  { path: 'news/:id', component: NewsDynamicComponent },

  // * Scenario: nested route with children property
  // * Uncomment lines below and comment lines 9 to 11
  // {
  //   path: 'news',
  //   component: NewsComponent,
  //   children: [
  //     { path: 'path', component: NewsPathComponent },
  //     { path: ':id', component: NewsDynamicComponent },
  //   ],
  // },
  { path: '**', redirectTo: '' },
];
