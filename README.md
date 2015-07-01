# TP AngularJS

Vous trouverez dans ce repository le TP utilisé durant la formation AngularJS.

### Prérequis

* Git
* Node.js et npm
* live-server, json-server et gulp

Dans un terminal

* $ sudo npm i live-server -g
* $ sudo npm i json-server -g
* $ sudo npm i gulp -g


### Installation

* Cloner le repository Git
* Ouvrir un terminal
* Se positionner dans le repertoire nouvellement créé et lancer la commande :

$ npm i


### Gulp

Plusieurs tâches gulp déjà définie

* code-quality : lint le code
* unit : lance les tests unitaires une fois
* tdd : tests unitaires en mode tdd
* documentation : génère de la documentation


## Etape 1

1. Créer dans le repertoire users un fichier users.tpl.html.
2. Couper coller le code du formulaire depuis le fichier index.html.
3. Installer et intégrer ui.router dans le projet
4. Créer un état users qui utilisera le template et le controlleur du même nom.
5. Supprimer la liste des "users" dans le controlleur
6. Dans un nouveau dossier src/model, créer un service userModel qui ira récuperer la liste des "users" à l'url http://localhost:3000/users.
7. Utiliser ce service conjointement avec l'attribut resolve afin que le select continue à fonctionner correctement