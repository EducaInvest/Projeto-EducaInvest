import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from '../shared/components/card/card.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'card', component: CardComponent}
    
];
