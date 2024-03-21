// const fs = require('fs'); // fs = file system

// //----------------------GESTION DE DOSSIERS--------------------// //

// //créer un dossier sans passer par le terminal grâce au file system avec fs.commande_git_bash
// if('./monDossier') {
//     fs.rmdir('./monDossier', (err) => {
//         console.log(err);
//     })
// } else {
//     fs.mkdir('./monDossier', (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("dossier créé");
//         }
//     });
// }


// // check si monDossier existe alors il me supprime, sinon il me le crée
// if(fs.existsSync('./monDossier')) {
//     fs.rmdir('./monDossier', (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("dossier supprimé");
//         }
//     })
// } else {
//     fs.mkdir('./monDossier', (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("dossier créé");
//         }
//     });
// }

// // Autre manière de checker, on peut utiliser la méthode access qui est plus performante
// fs.access('./monDossier', (err) => {
//     if (err) { // s'il y a une erreur c'est qu'on ne peut pas accéder au dossier donc on le crée
//         fs.mkdir('./monDossier', (err) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log("dossier créé");
//             }
//         });
//     } else { // s'il n'y a pas d'erreur c'est qu'il existe et donc on le supprime
//         fs.rmdir('./monDossier', (err) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log("dossier supprimé");
//             }
//         });
//     }
// })

// //----------------------------GESTION DES FICHIERS--------------------------//
// fs.access('./monDossier', (err) => {
//     if (err) { // s'il y a une erreur c'est qu'on ne peut pas accéder au dossier car il n'existe pas donc on le crée
//         fs.mkdir('./monDossier', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fs.writeFile(
//                     './monDossier/monFichier.txt', 
//                     'ce fichier est écrit avec node.js', 
//                     (err) => {
//                       if(err) {
//                         console.log(err);
//                       } else {
//                         console.log("le fichier a été créé");
//                       }  
//                     }
//                 )
//             }
//         });
//     }
// });

// //------------REFACTO GESTION FICHIERS---------------//
// const makeFile = () => {
//     fs.writeFile( // prend 3 paramètres: le chemin, le contenu et une callback pour attraper les erreurs
//         './monDossier/monFichier.txt', 
//         'ce fichier est écrit avec node.js', 
//         err => err ? console.log(err) : console.log("le fichier a été créé")
//     )
// }

// const createDir = () => fs.mkdir('./monDossier', err => err ? console.log(err): makeFile());

// fs.access('./monDossier', err => { err && createDir() });
// // l'équivalent de: s'il y a une erreur c'est qu'on ne peut pas accéder au dossier donc on appelle la fonction createDir

// //------ check si le fichier existe, s'il existe je le supprime, sinon je le crée -----//
// if(fs.existsSync('./monDossier/monFichier.txt')) {
//     fs.unlink('./monDossier/monFichier.txt', (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("fichier supprimé");
//         }
//     });
// } else {
//     fs.writeFile( // prend 3 paramètres: le chemin, le contenu et une callback pour attraper les erreurs
//         './monDossier/monFichier.txt', 
//         'ce fichier est écrit avec node.js', 
//         err => err ? console.log(err) : console.log("le fichier a été créé")
//     )   
// }

// //------------LIRE UN FICHIER--------------//
// fs.readFile('./monDossier/monFichier.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString()); //obligé d'appliquer la méthode toString() car sinon data est un buffer (retourne nos données en binaire, en buffer, qu'avec les octets)
//     }
// });    