import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender }, // Prerender the home page
  { path: 'about', renderMode: RenderMode.Prerender }, // Prerender the about page
  { path: 'greeting', renderMode: RenderMode.Prerender }, // Prerender the greeting page
  { path: 'weather-forecast', renderMode: RenderMode.Prerender }, // Prerender the weather-forecast page
  { path: '**', renderMode: RenderMode.Prerender } // Wildcard route
];
