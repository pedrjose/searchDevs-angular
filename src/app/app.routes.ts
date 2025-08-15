import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProfileComponent } from './components/profile/profile';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
  },
];
