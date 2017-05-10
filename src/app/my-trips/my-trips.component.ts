import { Component, OnInit } from '@angular/core'
import { Trip } from 'app/interfaces/trip'
import { TripService } from 'app/services/trip.service'

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

    private completed: Trip[]
    private coming: Trip[]
    private trip: Trip

    constructor(private tripService: TripService) { }

    ngOnInit() {
        this.completed = this.tripService.allCompleted()
        this.coming = this.tripService.allComing()
    }

    backAll() {
        this.trip = null
    }

    details(trip: Trip) {
        this.trip = trip
    }

    cancel(trip: Trip, event: Event, backAll?: boolean) {
        event.stopPropagation()
        this.coming = this.tripService.filter(trip, this.coming)

        if (backAll) {
            this.backAll()
        }
    }

}
