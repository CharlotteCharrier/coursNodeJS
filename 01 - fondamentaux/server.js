// // fonction fléchée
// const hello = (nom) => {
// console.log("Bonjour, je m'appelle " + nom);
// }

// // Fonction classique
// function hello2(nom) {
//     console.log("Bonjour, je m'appelle " + nom);
// }

// // S'il n'y a qu'1 param, pas obligé de mettre les (), s'il n'y a qu'1 consigne dans le return, pas besoin des {}
// const hello3 = nom => console.log("hello " + nom);

// hello3("Charlotte");

// //------------AFFICHER DES INFOS DEPUIS UN AUTRE FICHIER------------//
// const {eleves, cours} = require('./formation');

// console.log(eleves);
// console.log(cours);

// //------------GESTION D'ERREURS------------------//
// throw new Error('Il y a une nouvelle erreur'); 
// // même résultat qu'un .catch() dans un fetch
// // on peut aussi utiliser un try catch

// --------------------- //
const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (Request, Response) => {
        let fichier = ""; 

        // Response.setHeader("content-type", "text/html"); // j'envoie un header
        // Response.write('<head><meta charset="UTF-8"></head>') // pour gérer les caractères spéciaux
        // du coup à la place de fichier = "./path" on met "response.write(<notre html>)"

        // router improvisé
        if(Request.url === '/' || Request.url === '/home' &&  Request.method === 'GET') {
            fichier = "./views/home.html";
        }
        else if(Request.url === '/formation' && Request.method === 'GET') {
            fichier = "./views/formation.html";
        } 
        else if (Request.url === '/entreprise' && Request.method === 'GET') {
            fichier = "./views/entreprise.html";
        }
        else if (Request.url === '/contact' && Request.method === 'GET') {
            fichier = "./views/contact.html";
        }
        else if (Request.url === '/profil' && Request.method === 'GET') {
            fichier = "./views/profil.html";
        } else {
            fichier = "./views/404.html";
        }
        // Response.end(); // arrête de tourner dans le vide, mis ici avant de faire le changement entre fichier = "path" et response.write()

        fs.readFile(fichier, (err, data) => {
            if(err) {
                console.log(err);
                Response.end();
            } else {
                Response.write(data);
                Response.end();
            }
        })
    }
    );
    
    server.listen(8080, "localhost", () => {
        console.log("server is listening on port 8080");
    })