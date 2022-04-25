# Projet Framework-Front
## Aliaume Delattaignant - Maxime Blampain

---
### Technos utilisées :

- Front-End:
  - React
  - Redux
  - React-Router-DOM
  - Chakra UI
  - ViteJS


- Back-End:
  - ExpressJS
  - Nodemon

---
## Créer une app de gestion de portefeuille (boursier, crypto ou autre)

- Fonctionnalités attendues:
    - Gestion d'utilisateurs:
      - Inscription / Connexion
      - Page profil :
        - Nom
        - Prénom
        - Adresse
        - Mot de passe
    - Gérer l'authentification
      - Ne pas pouvoir accéder à l'application sans connexion
      - Pouvoir se déconnecter
    - Dashboard avec les infos importantes :
      - Investissement
      - Graphiques avec stats par exemple
      - Autres informations potentiellement importantes
    - Gestion des investissements
      - CRUD d'une monnaie
      - Gestion des transactions multiples 
        - Ex: J'ai acheté 1 action à 100€, puis une autre à 75 -> Impact sur le PRU (87,5€)
    - Faire des appels API à la partie Back-End
      - Récupérer l'utilisateur et ses données
      - Récupérer les données crypto via une API Externe (Coin)
- Fonctionnalités optionnelles:
  - Gérer le multilingue
  - Gérer la devise de base