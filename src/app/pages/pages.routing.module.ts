import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


export const routes: Routes = [
    {
    path: '',
    component: PagesComponent,
    children: [{
        path: 'random',
        loadChildren: () => import('./random-cats/random-cats.module').then(m => m.RandomCatsModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'random'
    }
    ]
}, ]
