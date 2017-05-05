import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'
import { User } from 'app/interfaces/user'

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
    private email = ''
    private password = ''
    private rememberMe = false

    constructor(private router: Router) { }

    ngOnInit() {

    }

    validateCredentials() {
        return this.email.length > 0 && this.password.length > 0
    }

    connect() {
        if (this.validateCredentials()) {
            const user: User = {
                id: 0,
                name: '[unknown]',
                email: this.email
            }

            AuthenticationService.login(user)
            this.router.navigate(['/'])
        }
    }
}
