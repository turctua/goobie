import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { PortalComponent } from './pages/portal/portal.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { MusicianComponent } from './pages/musician/musician.component';
import { MusicianDetailsComponent } from './pages/musician-details/musician-details.component';


export const router: Routes = [
    // { path: '', redirectTo: 'app', pathhMatch: 'full' },        
    { path: '', component: HomeComponent},    
    { path: 'home', component: HomeComponent },  
    { path: 'login', component: LoginComponent },   
    { path: 'register', component: RegisterComponent },  
    { path: 'portal', component: PortalComponent , children: [
    	{ path: 'elements', component: ElementsComponent, outlet: 'portal-wrap' },
    	{ path: 'events', component: EventsComponent, outlet: 'portal-wrap'},
        { path: 'events-details', component: EventsDetailsComponent, outlet: 'portal-wrap'},
        { path: 'musician', component: MusicianComponent, outlet: 'portal-wrap'},
        { path: 'musician-details', component: MusicianDetailsComponent, outlet: 'portal-wrap'},



    	] },
    // { path: 'elements', component: ElementsComponent }, 
    // { path: 'elements', component: ElementsComponent, outlet: 'aux'}

    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);