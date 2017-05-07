import { Component, OnInit, Input } from '@angular/core'
import { Trip } from 'app/interfaces/trip'

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

    private lat = 43.600531
    private lng = 1.440456
    @Input()
    private trip: Trip

    constructor() { }

    ngOnInit() { }

}
