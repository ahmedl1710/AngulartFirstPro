import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Core/Emploi';

@Component({
  selector: 'app-offres-emplois',
  templateUrl: './offres-emplois.component.html',
  styleUrls: ['./offres-emplois.component.css']
})
export class OffresEmploisComponent implements OnInit {
  listeEmploi!:Emploi[];
  compteur!:number;
  searchtext!:string;

  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[{reference:'007',titre:'IT ingenieer',entreprise:'EY',etat:true},{reference:'128',titre:'electro-mecanical ingenieer',entreprise:'tlan',etat:true}]
  }
  bilan():void {
    this.compteur =0;
    for(let i=0;i<this.listeEmploi.length;i++){
      if(this.listeEmploi[i].etat == true)this.compteur++;
      }
  }
  //search1  parcours de la liste avec boucle for 
  // on doit declarer emps au sein de cette classe component 
search1():void{
    let emps!:Emploi[];
    for(let i=0;i<this.listeEmploi.length;i++){{
      if(this.listeEmploi[i].entreprise == this.searchtext)
      emps.push(this.listeEmploi[i]);
    }
  }
}

//utilise ecmascript6
//le bon pratique
search2(){
 this.listeEmploi= this.listeEmploi.filter((emp)=>emp.entreprise.match(this.searchtext));
}


} 