import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ConnectionComponent } from './connection/connection.component'
import { AddRideComponent } from './add-ride/add-ride.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'connect', component: ConnectionComponent },
    { path: 'rides/add', component: AddRideComponent }
]

export default routes
