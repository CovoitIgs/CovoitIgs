import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})
export class AddRideComponent implements OnInit {
    private lat = 43.600531
    private lng = 1.440456
    private departure = ''
    private departureTime = ''
    private arrival = ''
    private arrivalTime = ''
    private detour = ''
    private recurrence = ''
    private places = ''
    private errorDeparture = false
    private errorDepartureTime = false
    private errorArrival = false
    private errorArrivalTime = false

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude
                this.lng = position.coords.longitude
            })
        }
    }

    route() {

    }

    add() {
        if (this.rideValidation()) {
            // add ride
        }
    }

    private rideValidation() {
        let valid = true

        if (this.departure.length === 0) {
            this.errorDeparture = true
            valid = false
        } else {
            this.errorDeparture = false
        }

        if (this.departureTime.length === 0) {
            this.errorDepartureTime = true
            valid = false
        } else {
            this.errorDepartureTime = false
        }

        if (this.arrival.length === 0) {
            this.errorArrival = true
            valid = false
        } else {
            this.errorArrival = false
        }

        if (this.arrivalTime.length === 0) {
            this.errorArrivalTime = true
            valid = false
        } else {
            this.errorArrivalTime = false
        }

        return valid
    }
}
