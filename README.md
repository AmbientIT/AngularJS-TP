## Etape 6

1. Créer un service commentModel
2. Y ajouter la méthode create() :
    * prend un objet en paramètre
    * lance une requête HTTP POST
    * retourne une promise
3. Au submit du formulaire, appeler la méthode create()
4. L'objet comment passé en argument doit posséder les attributs suivants :
    * title
    * content
    * movie : id du film commenté
    * author : id du user loggé