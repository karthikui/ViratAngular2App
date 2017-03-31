import { Routes }  from '@angular/router'
import {LoginAppComponent} from './auth/login/login-app.component'
import {DashboardAppComponent } from './dashboard/dashboard-app.component'
import {DashboardThumbnailComponent } from './dashboard/dashboard-thumbnail.component'

export const appRoutes : Routes = [
    { path : 'login', component : LoginAppComponent },
    { path:'dashboard' , component : DashboardAppComponent },
    { path:'dashboard/:id' , component : DashboardThumbnailComponent },
    { path: '' , redirectTo:'/login', pathMatch : 'full' }
]