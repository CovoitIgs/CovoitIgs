import { Injectable } from '@angular/core'
import { Trip } from 'app/interfaces/trip'

@Injectable()
export class TripService {

    all(): Trip[] {
        return []
    }

    allForSearch(term) {
        const all = [
            {
                id: 1,
                departure: 'Balma',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Quentin Pomarel'
            },
            {
                id: 1,
                departure: 'Labège',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Robin Dauly'
            },
            {
                id: 1,
                departure: 'Saint-Cyprien',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Quentin Pomarel'
            }
        ]

        return all
    }

    allCompleted(): Trip[] {
        return [
            {
                id: 1,
                departure: 'Balma',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Quentin Pomarel'
            },
            {
                id: 1,
                departure: 'Labège',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Robin Dauly'
            },
            {
                id: 1,
                departure: 'Saint-Cyprien',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Quentin Pomarel'
            }
        ]
    }

    allComing(): Trip[] {
        return [
            {
                id: 1,
                departure: 'La Roseraie',
                departureTime: new Date(),
                arrival: 'Blagnac',
                arrivalTime: new Date(),
                driver: 'Julien Sergent'
            }
        ]
    }

    filter(trip: Trip, trips: Trip[]) {
        return trips.filter(current => current.id !== trip.id)
    }

}
