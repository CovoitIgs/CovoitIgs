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
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
      UserService,
      AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
