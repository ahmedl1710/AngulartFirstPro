import { Component, OnInit } from '@angular/core';
import { article } from '../Core/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  titre:String="Les articles du jour";
  listeArticles!:article[];
  articleNUmber!:number;

  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[
      {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
       {titre:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'AhmedSaid',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'},
      {titre:'Le championnat d arabe',contenu:'Le champion d arabe de cette année est .....',auteur:'Ahmed Marzouk',date:'20/11/2022',categorie:'boxe anglaise'},
      {titre:'Comment ecrire une lettre de motivation',contenu:'comme ça on ecrit une lettre de motivation .....',auteur:'esprit',date:'12/15/2022',categorie:'Education'},
       
       
     ]}


     //question 11
     //si on passe dans linput un nombre d'article et afficher le nombre-1 ce 1 c'est larticle de categorie travail
  parcour(){
     this.listeArticles=this.listeArticles.slice(0, this.articleNUmber);
  }

}
