import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {loginAppComponent} from "./login/login-app.component";

@NgModule({

    imports : [BrowserModule],
    declarations: [loginAppComponent],
    bootstrap: [loginAppComponent]
})
export class AppModule {

}