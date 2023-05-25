import { sncfInterface } from "../interfaces/SNCF";
import { EventResult } from "../interfaces/ticketMaster";

class GenericFunctions {

    getFormattedDateEvent(event: EventResult) {
        const date = new Date(event?.dates.start.dateTime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const formattedDate = `${day}/${month}/${year} à ${hours}:${minutes}`;

        if (date) {
            return formattedDate;
        } else {
            return "Date inconnue";
        }
    }

    getFormattedJourneyInfo(journey: sncfInterface) {
        const arrivalDateTime = journey?.journeys?.[0]?.arrival_date_time;

        if (arrivalDateTime) {
            const formattedDate = this.newDateParse(arrivalDateTime).toString();
            return `${formattedDate} ${journey.journeys[0].sections[1].display_informations.commercial_mode}`;
        } else {
            return "Le trajet n'a pas encore été défini";
        }
    }

    messageStepFromLocalCity(paramsLocalCity: string) {
        const localCity = paramsLocalCity
        if (localCity) {
            return `Étapes pour un départ de ${localCity}`
        } else {
            return `Étapes pour un départ de ${paramsLocalCity}`
        }
    }

    formatHoursFromSeconds(totalSeconds: number) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        return `${hours}h${minutes}`;
    }

    newDateParse(dateParams: string | any) {
        const dateString = dateParams;
        const year = parseInt(dateString.substr(0, 4));
        const month = parseInt(dateString.substr(4, 2)) - 1; // Les mois commencent à partir de 0 (janvier = 0)
        const day = parseInt(dateString.substr(6, 2));
        const hour = parseInt(dateString.substr(9, 2));
        const minute = parseInt(dateString.substr(11, 2));

        const formattedDate = `${this.padZero(day)}/${this.padZero(month + 1)}/${year} à ${this.padZero(hour)}:${this.padZero(minute)}`;

        return formattedDate;
    }

    padZero(value: number) {
        return value.toString().padStart(2, '0');
    }
}

export default GenericFunctions;
