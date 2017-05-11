import { Component, OnInit, DoCheck } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'
import { User } from 'app/interfaces/user'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, DoCheck {

    isAuthenticated: boolean
    private user: User
    private searchTerm: string

    constructor(private router: Router) { }

    ngOnInit() {
        this.user = AuthenticationService.user()
        this.isAuthenticated = AuthenticationService.logged()
    }

    ngDoCheck() {
        this.isAuthenticated = AuthenticationService.logged()
    }

    logout() {
        AuthenticationService.logout()
        this.router.navigate(['/'])
    }

    search() {
        if (this.searchTerm.length > 0) {
            this.router.navigate(['search', this.searchTerm])
        }
    }

}
