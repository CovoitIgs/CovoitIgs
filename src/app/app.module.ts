import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import routes from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { AppHeaderComponent } from './app-header/app-header.component'
import { AppFooterComponent } from './app-footer/app-footer.component'
import { UserService } from './services/user.service'
import { AuthenticationService } from './services/authentication.service'
import { ConnectionComponent } from './connection/connection.component'
import { AddRideComponent } from './add-ride/add-ride.component'

import { AgmCoreModule } from 'angular2-google-maps/core'
import { ContactComponent } from './contact/contact.component'
import { MyTripsComponent } from './my-trips/my-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ConnectionComponent,
    AddRideComponent,
    ContactComponent,
    MyTripsComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0vEGP54d4aem21xq9fy4wmUw9uHoYQLI'
    })
  ],
  providers: [
      UserService,
      AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
