import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppComponent } from './app.component';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import * as $ from 'jquery';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { provideRoutes} from '@angular/router';
import { ElementsComponent } from './pages/elements/elements.component';
import {FormsModule} from "@angular/forms";

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


