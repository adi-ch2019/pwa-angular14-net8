import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GreetingComponent } from './greeting/greeting.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent }, // About page
  { path: 'greeting', component: GreetingComponent }, // Greetubg page
  { path: '**', redirectTo: '' } // Wildcard route for 404 handling
];
