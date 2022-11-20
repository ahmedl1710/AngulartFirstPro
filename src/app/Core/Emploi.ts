export class Emploi{
    reference!:string;
    titre!:string;
    entreprise!:string;
    etat!:boolean;
    //le point d'exclamation l'attribut prend null sans initialisation
    //sans point d'exclamation l'attribut sera indefined
    //on peut la configurer automatiquement mais ce n'est pas le bon pratique
    }