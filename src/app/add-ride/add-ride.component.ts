import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})
export class AddRideComponent implements OnInit {
    private lat = 43.600531
    private lng = 1.440456

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude
                this.lng = position.coords.longitude
            })
        }
    }
}
