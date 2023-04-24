# OUTING BOOKER

## Description
Cette application est composée d'un client basé sur React.js et d'un serveur basé sur Node.js. Le client est une application web front-end qui permet aux utilisateurs d'interagir avec le serveur pour effectuer diverses actions.

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js [Télécharger NodeJS](https://nodejs.org/)

Installer la version LTS (Long Term Support)
export type TicketMasterEvent = {
    name: string;
    type: string;
    id: string;
    description: string;
    url: string;
    image: {
        url: string;
    }[];
    sales: {
        public: {
            startDateTime: string;
            startTBD: boolean;
            startTBA: boolean;
            endDateTime: string;
        }
    }
    dates: {
        start: {
            localDate: string;
            localTime: string;
            dateTime: string;
            dateTBD: boolean,
            dateTBA: boolean,
            timeTBA: boolean,
            noSpecificTime: boolean
        }
        timezone: string;
        status: {
            code: string;
        }
        classification: {
            primary: boolean;
            segment: {
                id: string;
                name: string
            }
            genre: {
                id: string;
                name: string
            }
            subGenre: {
                id: string;
                name: string
            }
            family: boolean
        }
        priceRanges: {
            type: string;
            currency: string;
            min: number;
            max: number;
        }
        _embedded: {
            venues: {
                name: string;
                type: string;
                id: string;
                additionalInfo: string;
                img: {
                    url: string;
                }
                postalCode: string;
                city: { name: string }
                country: {
                    name: string;
                    countryCode: string;
                }
                address: {
                    line1: string;
                }
                location: {
                    longitude: string;
                    latitude: string;
                }
            }
        }
    }
}
## Installation

#### Client
Ouvrez un terminal et accédez au répertoire du client.
```
cd client
```
Exécutez npm install pour installer les dépendances du client.
```
npm install
```
Ensuite, exécutez npm start pour démarrer l'application client en mode développement.

```
npm start
```
Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application client s'exécuter localement.
Serveur (Node.js)

### Server

Ouvrez un autre terminal et accédez au répertoire du server.
```
cd server
```
Exécutez npm install pour installer les dépendances du server.
```
npm install
```
Configurez les variables d'environnement nécessaires, telles que les informations de connexion à la base de données ou d'autres configurations spécifiques de votre application.
Ensuite, exécutez npm start pour démarrer le serveur.
Votre serveur sera maintenant en cours d'exécution sur le port spécifié dans votre configuration.

## Utilisation

Ouvrez votre navigateur et accédez à l'URL où l'application client est en cours d'exécution (par défaut : http://localhost:3000).
Interagissez avec l'application client pour effectuer les actions souhaitées. Les actions effectuées par l'utilisateur seront traitées par le serveur en arrière-plan.