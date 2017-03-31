import { Component, Input }  from '@angular/core'
import {DashboardService } from  '../shared/services/dashboard.service'
import {ActivatedRoute} from '@angular/router'
@Component({
    selector: 'dashboard-thumbnail',
    template: `
<div class = "well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>
            Date:{{event?.date}}
        </div>
        <div>
            Time:{{event?.time}}
        </div>
    <div *ngIf = "event?.location">
        <span>Location:{{event.location.address}}</span>
        <span>nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <div *ngIf="event?.imageUrl">
    Image URL: {{event?.imageUrl}}
</div>
</div>
`
})

export class DashboardThumbnailComponent {
    event:any

    constructor(private  dashboardService : DashboardService, private activatedRoute : ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.dashboardService.getEvent(+this.activatedRoute.snapshot.params['id'])
    }
}