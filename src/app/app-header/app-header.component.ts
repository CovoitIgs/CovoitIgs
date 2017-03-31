import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

    isAuthenticated = AuthenticationService.logged()

    constructor() { }

    ngOnInit() {
    }

}
