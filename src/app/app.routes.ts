import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', children: [] },
    { path: 'about', children: [] },
    { path: 'skills', children: [] },
    { path: 'projects', children: [] },
    { path: '**', redirectTo: 'home' }
];