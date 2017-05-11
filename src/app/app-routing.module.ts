import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ConnectionComponent } from './connection/connection.component'
import { AddRideComponent } from './add-ride/add-ride.component'
import { MyTripsComponent } from './my-trips/my-trips.component'
import { TripDetailsComponent } from './trip-details/trip-details.component'
import { TripSearchComponent } from './trip-search/trip-search.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'connect', component: ConnectionComponent },
    { path: 'rides', component: MyTripsComponent },
    { path: 'rides/add', component: AddRideComponent },
    { path: 'rides/:id', component: TripDetailsComponent },
    { path: 'search/:term', component: TripSearchComponent }
]

export default routes
