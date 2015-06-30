## Etape 9

1. Ajouter au service commentModel la méthode delete() :
    * prend un id en argument
    * lance une requête HTTP DELETE
    * retourne une promise
2. Ajouter à Movie (dans movieModel.js) la méthode removeComment() :
    * prend un commentaire en argument
    * appelle la méthode commentModel.delete()
3. Appeler la méthode removeComment() lorsque le bouton delete "X" est cliqué
4. S'assurer que le compteur de commentaires est bien mis à jour dans la liste de films