## Etape 2

1. Créer un nouveau state "movies" en vous inspirant du state "users"
2. Dans le dossier src/model, créer un service movieModel en vous inspirant de userModel
3. Injecter la liste des films dans le controller MoviesController à l'aide de la propriété resolve
4. Rendre dynamique la vue du state "movies" en utilisant ng-repeat pour afficher la liste des films
5. Lorsque le bouton Login est cliqué dans le state "users", naviguer vers le state "movies"