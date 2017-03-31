import { Component }  from '@angular/core'
import {DashboardService} from '../shared/services/dashboard.service'

@Component({
    selector: 'dashboard-app',
    template : `
<div class="row">
    <div *ngFor="let event of events" class="col-md-5">
        <dashboard-detail [event] = "event"> </dashboard-detail>
    </div>
</div>
              `,
})

export class DashboardAppComponent {
    events:any

    constructor(private dashboardService: DashboardService){

    }
    ngOnInit() {
        this.events = this.dashboardService.getEvents()
    }
}