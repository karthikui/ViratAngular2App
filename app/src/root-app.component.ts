import { Component }  from '@angular/core'


@Component({
       selector:'root-app',
       template:`
            <auth-app></auth-app>
            <router-outlet></router-outlet>
`
})

export class RootAppComponent {

}