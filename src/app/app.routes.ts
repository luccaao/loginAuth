import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        loadComponent() {
            return import('./pages/home/home.component').then(m => m.HomeComponent);
        },
    }
    
    
];
