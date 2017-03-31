import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {LoginAppComponent} from "./auth/login/login-app.component";
import {AuthAppComponent} from './auth/auth-app.component'
import {DashboardApp} from './dashboard/dashboard-app.component'
import {DashboardService} from './shared/services/dashboard.service'
import {RootAppComponent} from './root-app.component'

@NgModule({

    imports : [BrowserModule],
    declarations: [LoginAppComponent,AuthAppComponent, DashboardApp,RootAppComponent],
    bootstrap: [RootAppComponent],
    providers : [DashboardService]
})
export class AppModule {

}