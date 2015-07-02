## Etape 3

1. Créer un sous état de "movies" : "movies.detail" avec l'url '/detail/:id'
2. Utiliser le service $state pour aller au state "movies.detail" quand on clique sur un film dans la liste
3. Ajouter une methode findOne() au service movieModel :
    * prend un id de film en paramètre
    * lance une requête HTTP GET sur http://localhost:3000/movies/{{movieId}}
    * retourne une promise
4. Dans le "movie.detail", afficher les informations du film cliqué