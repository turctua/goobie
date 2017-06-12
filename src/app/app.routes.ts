import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ElementsComponent } from './pages/elements/elements.component';

export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },    
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },    
    { path: 'elements', component: ElementsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);