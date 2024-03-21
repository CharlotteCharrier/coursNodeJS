//objet littéral, car on le crée (un  global est déjà créé)
let voiture = {
    chevaux: 4,
    annee: 2024,
    energie: "diesel",
    a: () => console.log(this.energie), // quand il est appelé, renvoie la propriété energie de l'objet voiture (accès depuis l'intérieur de l'objet)
    b: function () {
        console.log(this.energie)
    }
}

console.log(voiture); // renvoie l'objet en entier

console.log(voiture.energie); // renvoie que la propriété energie de l'objet voiture (accès depuis l'extérieur de l'objet)

console.log(voiture["energie"]); // on peut itérer sur un objet comme dans un tableau

//destructuring
let {chevaux, annee} = voiture;
console.log(annee); // mais si je log(energie) ça me dira qu'il est pas defined car il n'est pas ajouté dans la destructuration au dessus
