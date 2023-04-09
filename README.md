# OUTING BOOKER
## Description

Outing Booker est une application permettant de facilitant la réservation de voyage à destination d’événement précis (conférence, concert, convention, …) pour les professionnels et les particuliers.

L’application pourra réserver automatiquement tous les moyens de transports, les hébergements ainsi que le ticket d’entrée de l’événement.

Après réservation de tous les éléments, l’application fera un résumé complet sous forme de timeline avec des notifications push avec les informations de la prochaine étape du voyage.

En cas de retard, d’annulation d’un moyen de transport ou d’un hébergement, elle pourra aussi renseigner des alternatives pour tout de même arriver à destination.

Cette application est composée d'un client basé sur React.js et d'un serveur basé sur Node.js.

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js : Télécharger Node.js
npm (Node Package Manager) : npm est inclus avec Node.js

## Installation

Client (React.js)
Ouvrez un terminal et accédez au répertoire du client (cd client)
Exécutez npm install pour installer les dépendances du client.
Ensuite, exécutez npm start pour démarrer l'application client en mode développement.
Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application client s'exécuter localement.
Serveur (Node.js)
Ouvrez un autre terminal et accédez au répertoire du serveur.
Exécutez npm install pour installer les dépendances du serveur.
Configurez les variables d'environnement nécessaires, telles que les informations de connexion à la base de données ou d'autres configurations spécifiques de votre application.
Ensuite, exécutez npm start pour démarrer le serveur.
Votre serveur sera maintenant en cours d'exécution sur le port spécifié dans votre configuration.

## Utilisation

Ouvrez votre navigateur et accédez à l'URL où l'application client est en cours d'exécution (par défaut : http://localhost:3000).
Interagissez avec l'application client pour effectuer les actions souhaitées. Les actions effectuées par l'utilisateur seront traitées par le serveur en arrière-plan.
Le serveur peut également être appelé directement à partir d'autres clients, tels que des applications mobiles ou des applications tierces, en utilisant les API exposées par le serveur.
Contribution
Si vous souhaitez contribuer à ce projet, vous pouvez suivre ces étapes :

Fork (créer une copie) du dépôt.
Créez une nouvelle branche pour votre contribution.
Effectuez les modifications souhaitées.
Soumettez une demande de tirage (pull request) avec une description détaillée de vos modifications.
Vos contributions seront examinées et fusionnées si elles sont acceptées.

## Déploiement
Pour déployer cette application en production, vous pouvez suivre les meilleures pratiques de déploiement pour les applications React.js et Node.js, telles que l'utilisation de services d'hébergement ou de plateformes de déploiement. Assurez-vous de configurer les variables d'environnement appropriées pour les environnements de production et de suivre les meilleures pratiques en matière de sécurité pour protéger vos données sensibles.