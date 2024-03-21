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

//         // Response.setHeader("content-type", "text"eader
//         // Response.write('<head><meta charset="UTF-8"></head>') // pour gérer les caractères spéciaux
//         // du coup à la place de fichier = "./path" on met "response.write(<notre>outer improvisé
//         if(Request.url === '/' || Request.url === '/home' &&  Request.method === 'GET') {
//             fichier = "./home"       else if(Request.url === '/formation' && Request.method === 'GET') {
//             fichier = "./formation"        else if (Request.url === '/entreprise' && Request.method === 'GET') {
//             fichier = "./entreprise"       else if (Request.url === '/contact' && Request.method === 'GET') {
//             fichier = "./contact"       else if (Request.url === '/profil' && Request.method === 'GET') {
//             fichier = "./profil" {
//             fichier = "./404"       // Response.end(); // arrête de tourner dans le vide, mis ici avant de faire le changement entre fichier = "path" et response.write()

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
//pas besoin de require ejs car express prend déjà en charge ce template
const app = express();
const { subtitle, projects } = require('./data'); // je récupère les données du fichier data

app.set('view engine', 'ejs') //définition du moteur de template
// app.set('views', 'toto'); // ce qu'on devrait écrire si notre dossier s'appelait pas 'views' mais 'toto' (car par défaut il va chercher les vues dans un dossier 'views')

app.use('/public', express.static(__dirname + '/public')); 
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect(301,'/home'); // on spécifie le code http (pas obligatoire) puis on lui donne le chemin de la redirection
})

//définition de mes variables pour les props
let currentPage = ''; // sert à envoyer le nom de chaque page pour gérer dans le composant header l'ajout de la classe active pour la navbar
let title = ''; // si je veux changer mon title à chaque page, j'initialise ma variable à vide que je modifierais dans chaque middlewares suivants :

//avec ejs on utilise la méthode 'render' plutôt que 'sendFile':
app.get('/home', (req, res) => {
    title='Portfolio de Charlotte';
    currentPage ='home';
    res.status(200).render('home', {title, subtitle, currentPage, projects}); // ici passage de props pour que ce soit lu dans le fichier home.ejs
})

app.get('/entreprise', (req, res) => {
    title = 'Rencontre avec la MAIF';
    currentPage ='entreprise';
    res.status(200).render('entreprise', {title, subtitle, currentPage, projects});
})

app.get('/formation', (req, res) => {
    title = 'Mon parcours de formation';
    currentPage ='formation';
    res.status(200).render('formation', {title, subtitle, currentPage, projects});
})

app.get('/contact', (req, res) => {
    currentPage ='contact';
    res.status(200).render('contact', {title, subtitle, currentPage, projects});
})

app.get('/profil', (req, res) => {
    title = 'Qui suis-je ?';
    currentPage ='profil';
    res.status(200).render('profil', {title, subtitle, currentPage, projects});
})

app.use((req, res) => {
    res.status(200).render('404', {title, subtitle});
})

app.listen(8080, "localhost", () => {
    console.log("server is listening on port 8080");
})