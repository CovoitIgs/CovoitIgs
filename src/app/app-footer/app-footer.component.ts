import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

    isAuthenticated = AuthenticationService.logged()
  constructor() { }

  ngOnInit() {
  }

}
