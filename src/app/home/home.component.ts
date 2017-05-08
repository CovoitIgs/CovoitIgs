import { Component, OnInit, DoCheck } from '@angular/core'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

    isAuthenticated: boolean

  constructor() { }

  ngOnInit() {

        this.isAuthenticated = AuthenticationService.logged()
    }

    ngDoCheck() {
        this.isAuthenticated = AuthenticationService.logged()
    }

}
