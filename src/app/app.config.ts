// * Angular module
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // * Making routing available from app.routes.ts file
    provideRouter(routes),
    // * Making http available
    provideHttpClient(),
  ],
};
