import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OffresEmploisComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ArticlesComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],


  //ici on declare les services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
