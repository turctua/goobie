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
import { ElementsComponent } from './pages/elements/elements.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ElementsComponent,
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


