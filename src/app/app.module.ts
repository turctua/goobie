// IMPORTS CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import {FormsModule} from "@angular/forms";
import * as $ from 'jquery';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';


// IMPORTS NGX-BOOSTRAP COMPONENTS
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';  

// IMPORTS PAGES
import { HomeComponent } from './home/home.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { PortalComponent } from './pages/portal/portal.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { MusicianComponent } from './pages/musician/musician.component';
import { MusicianDetailsComponent } from './pages/musician-details/musician-details.component';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    ServicesComponent,
    ElementsComponent,
    PortalComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent,
    EventsDetailsComponent,
    MusicianComponent,
    MusicianDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    Angular2FontAwesomeModule,
    FormsModule,
    //RouterModule.forRoot(routes),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 


}


