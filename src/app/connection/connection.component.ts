import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

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
            this.router.navigate(['/'])
        }
    }
}
