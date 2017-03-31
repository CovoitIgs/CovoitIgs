import { Injectable } from '@angular/core'

@Injectable()
export class AuthenticationService {

    static logged() {
        const user = localStorage.getItem('user')

        if ( !user ) {
            return false
        }

        return true
    }

    constructor() { }

}
