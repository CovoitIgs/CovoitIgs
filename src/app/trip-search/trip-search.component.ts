import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Trip } from 'app/interfaces/trip'
import { TripService } from 'app/services/trip.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.scss']
})
export class TripSearchComponent implements OnInit {
    private term: string
    private trips: Trip[]
    private trip: Trip

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private tripService: TripService) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => this.term = params['term'])
        this.trips = this.tripService.allForSearch(this.term)
    }

    backAll() {
        this.trip = null
    }

    details(trip: Trip) {
        this.trip = trip
    }

    book(trip: Trip) {

    }

}
