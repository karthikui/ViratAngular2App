import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import {LoginAppComponent} from "./auth/login/login-app.component";
import {AuthAppComponent} from './auth/auth-app.component'
import {DashboardAppComponent} from './dashboard/dashboard-app.component'
import {DashboardService} from './shared/services/dashboard.service'
import {RootAppComponent} from './root-app.component'
import {DashboardDetailComponent} from './dashboard/dashboard-detail.component'
import { appRoutes} from './routes'

@NgModule({

    imports : [
        BrowserModule,
        RouterModule.forRoot(appRoutes,{useHash: true})
    ],
    declarations: [LoginAppComponent,AuthAppComponent, DashboardAppComponent,RootAppComponent,DashboardDetailComponent],
    bootstrap: [RootAppComponent],
    providers : [
        DashboardService
    ]
})
export class AppModule {

}