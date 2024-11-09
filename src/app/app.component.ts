// * Angular modules
import { Component } from '@angular/core';

// * Components
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  changeRoute(routeName: string) {
    this.router.navigate([routeName]);
  }
}
