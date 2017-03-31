import { Component }  from '@angular/core'

@Component({
    selector: 'auth-app',
    template : `
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">Virat HealthCare System</a>
        </div>
        <div class="collapse navbar-collapse navbar-right">
            <ul class="nav navbar-nav">
                <li><a href="/">Login</a></li>
                <li><a href="/">Sign Up</a></li>
            </ul>
        </div>
    </div>
</nav>
              `,
    styleUrls:['app/src/auth/auth-app.component.css']
})

export class AuthAppComponent {

}