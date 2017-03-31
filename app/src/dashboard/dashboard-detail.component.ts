import { Component, Input }  from '@angular/core'
import {DashboardService } from  '../shared/services/dashboard.service'
import {ActivatedRoute} from '@angular/router'
@Component({
    selector : 'dashboard-detail',
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
`,
    styles:[`
              .well {
              background-color:inherit
              }
           `]
})
export class DashboardDetailComponent {
    @Input() event:any
}
