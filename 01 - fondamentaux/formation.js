const eleves = [
    {
        nom: "Omer",
        niveau: 1
    },
    {
        nom: "Charlotte",
        niveau: 1
    },
    {
        nom: "Olivier",
        niveau: 1
    },
    {
        nom: "Marie",
        niveau: 1
    },
    {
        nom: "Morgan",
        niveau: 1
    }
]

const cours = ["Javascript", "Postgresql", "NodeJS", "ReactJS", "Java"];
module.exports = {eleves, cours}; // destructuring qui sert à rendre mes fonctions accessibles dans d'autres fichiers grâce à un require