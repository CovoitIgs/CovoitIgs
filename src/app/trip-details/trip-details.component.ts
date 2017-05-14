import { Component, OnInit, Input } from '@angular/core'
import { Trip } from 'app/interfaces/trip'

declare var google: any

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

    private latDefault = 43.600531
    private lngDefault = 1.440456

    @Input()
    private trip: Trip

    constructor() { }

    ngOnInit() {

    const directionsService = new google.maps.DirectionsService
       const directionsDisplay = new google.maps.DirectionsRenderer
       const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: this.latDefault, lng: this.lngDefault}
        })
        directionsDisplay.setMap(map)
        calculateAndDisplayRoute(directionsService, directionsDisplay)

        function calculateAndDisplayRoute(directionsService, directionsDisplay) {

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

    }


}
