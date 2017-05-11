import { Component, OnInit, Input } from '@angular/core'
import { Trip } from 'app/interfaces/trip'

@Component({
  selector: 'app-trip-list-details',
  templateUrl: './trip-list-details.component.html',
  styleUrls: ['./trip-list-details.component.scss']
})
export class TripListDetailsComponent implements OnInit {
    @Input()
    public trip: Trip

  constructor() { }

  ngOnInit() { }

}
