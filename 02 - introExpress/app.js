// // // fonction fléchée
// // const hello = (nom) => {
// // console.log("Bonjour, je m'appelle " + nom);
// // }

// // // Fonction classique
// // function hello2(nom) {
// //     console.log("Bonjour, je m'appelle " + nom);
// // }

// // // S'il n'y a qu'1 param, pas obligé de mettre les (), s'il n'y a qu'1 consigne dans le return, pas besoin des {}
// // const hello3 = nom => console.log("hello " + nom);

// // hello3("Charlotte");

// // //------------AFFICHER DES INFOS DEPUIS UN AUTRE FICHIER------------//
// // const {eleves, cours} = require('./formation');

// // console.log(eleves);
// // console.log(cours);

// // //------------GESTION D'ERREURS------------------//
// // throw new Error('Il y a une nouvelle erreur'); 
// // // même résultat qu'un .catch() dans un fetch
// // // on peut aussi utiliser un try catch

// // --------------------- //
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(
//     (Request, Response) => {
//         let fichier = ""; 

//         // Response.setHeader("content-type", "text/html"); // j'envoie un header
//         // Response.write('<head><meta charset="UTF-8"></head>') // pour gérer les caractères spéciaux
//         // du coup à la place de fichier = "./path" on met "response.write(<notre html>)"

//         // router improvisé
//         if(Request.url === '/' || Request.url === '/home' &&  Request.method === 'GET') {
//             fichier = "./views/home.html";
//         }
//         else if(Request.url === '/formation' && Request.method === 'GET') {
//             fichier = "./views/formation.html";
//         } 
//         else if (Request.url === '/entreprise' && Request.method === 'GET') {
//             fichier = "./views/entreprise.html";
//         }
//         else if (Request.url === '/contact' && Request.method === 'GET') {
//             fichier = "./views/contact.html";
//         }
//         else if (Request.url === '/profil' && Request.method === 'GET') {
//             fichier = "./views/profil.html";
//         } else {
//             fichier = "./views/404.html";
//         }
//         // Response.end(); // arrête de tourner dans le vide, mis ici avant de faire le changement entre fichier = "path" et response.write()

//         fs.readFile(fichier, (err, data) => {
//             if(err) {
//                 console.log(err);
//                 Response.end();
//             } else {
//                 Response.write(data);
//                 Response.end();
//             }
//         })
//     }
//     );
    
//     server.listen(8080, "localhost", () => {
//         console.log("server is listening on port 8080");
//     })

//----------------ROUTER AVEC EXPRESS--------------//
const express = require('express');
const morgan = require('morgan'); // sert à afficher des infos dans le terminal quand on navigue de pages en pages
const cors = require('cors'); //sert à authoriser les liens entre les plateformes (backend - api...) 
const app = express();

app.use('/public', express.static(__dirname + '/public')); 
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect(301,'/home'); // on spécifie le code http (pas obligatoire) puis on lui donne le chemin de la redirection
})

app.get('/home', (req, res) => {
    res.status(200).sendFile('views/home.html', {root: __dirname});
})

app.get('/entreprise', (req, res) => {
    res.status(200).sendFile('views/entreprise.html', {root: __dirname});
})

app.get('/formation', (req, res) => {
    res.status(200).sendFile('views/formation.html', {root: __dirname});
})

app.get('/contact', (req, res) => {
    res.status(200).sendFile('views/contact.html', {root: __dirname});
})

app.get('/profil', (req, res) => {
    res.status(200).sendFile('views/profil.html', {root: __dirname});
})

// app.get('*', (req, res) => {
//     res.status(200).sendFile('views/404.html', {root: __dirname});
// })

app.use((req, res) => {
    res.status(200).sendFile('views/404.html', {root: __dirname});
})


app.listen(8080, "localhost", () => {
    console.log("server is listening on port 8080");
})