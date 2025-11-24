import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: null },
    { path: 'about', component: null },
    { path: 'skills', component: null },
    { path: 'projects', component: null },
    { path: '**', redirectTo: 'home' }
];