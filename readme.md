# O'Clock Memory Backend

### Base de données

J'ai fait le choix d'une base de données non relationnelle MongoDB car ici mon usage des données restera simple, je n'aurais pas besoin de faire de jointures entre les tables. Ayant pour objectif d'héberger ma base de données, il est aussi plus facile de trouver une solution gratuite en utilisant MongoDB (en comparaison à PostgreSQL par exemple).

Pour ce faire, j'ai utilisé [Atlas](https://www.mongodb.com/atlas/database), où j'ai pu créer ma base de données et l'héberger. En association, j'ai utilisé **MongoDB Compass**, une interface graphique sur laquelle visualiser ses données.  

### Hébergement sur Render

J'ai hébergé mon serveur back sur Render, une des rares plateformes où l'on trouve encore une option gratuite. Mais cela vient avec son lot de désagrément : Render met 30sec à se réveiller après un certain temps.
