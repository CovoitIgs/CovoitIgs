import { Injectable } from '@angular/core'
import { User } from '../interfaces/user'

@Injectable()
export class AuthenticationService {

    static logged() {
        const user = localStorage.getItem('user')

        if ( !user ) {
            return false
        }

        return true
    }

    static login(user: User) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    static logout() {
        localStorage.removeItem('user')
    }

    static user(): User {
        if (this.logged()) {
            return <User>JSON.parse(localStorage.getItem('user'))
        }

        return null
    }

    constructor() { }

}
