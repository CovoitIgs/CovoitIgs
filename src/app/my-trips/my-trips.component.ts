import { Component, OnInit } from '@angular/core'
import { Trip } from 'app/interfaces/trip'

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

    private past: Trip[]
    private coming: Trip[]
    private trip: Trip

    constructor() { }

    ngOnInit() {
        this.past = this.mockTripsPast()
        this.coming = this.mockTripsComing()
    }

    backAll() {
        this.trip = null
    }

    details(trip: Trip) {
        this.trip = trip
    }

    mockTripsPast(): Trip[] {
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

    mockTripsComing(): Trip[] {
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

}
