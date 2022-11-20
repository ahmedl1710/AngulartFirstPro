import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ProductsComponent } from './products/products.component';

//Type ROutes c'est un type predefinie
//ici dans le tableau routes on va ajouter nos path
//eviter d'utiliser les "/" dans les pâth  
//l'ordre des routes est important 
//l'emplacement de NotFoundComponent doit etre a la fin de la table 
const routes: Routes = [
  {path:'products', component:ProductsComponent}, //inctanciation d'une route sous format Json
  {path:'offre-emploi', component:OffresEmploisComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'',redirectTo:'products',pathMatch:'full'}, //path de redirection
  {path:'**',component:NotFoundComponent}//la pth ** sgnifie ay chaine de caractere qui n'est pas dans la table des routes
];

@NgModule({
  //
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
