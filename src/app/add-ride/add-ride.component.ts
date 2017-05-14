import { Component, OnInit } from '@angular/core'

declare var google: any

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})
export class AddRideComponent implements OnInit {
    private latDefault = 43.600531
    private lngDefault = 1.440456
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

    private directionsService = new google.maps.DirectionsService()
    private directionsDisplay = new google.maps.DirectionsRenderer()
    // ngOnInit() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(position => {
    //             this.lat = position.coords.latitude
    //             this.lng = position.coords.longitude
    //         })
    //     }
    // }

    ngOnInit() {


        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: this.latDefault, lng: this.lngDefault}
            })
            this.directionsDisplay.setMap(map)
        //

    }

  private calculateAndDisplayRoute(directionsService, directionsDisplay) {

        directionsService.route({
            origin: {lat: 43.840098, lng: 1.389654},
            destination: {lat: 43.643841, lng: 1.386883},
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response)
            } else {
                window.alert('Directions request failed due to ' + status)
            }
        })
    }

    route() {
        this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
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
