import { Component, Input }  from '@angular/core'


@Component({
    selector : 'dashboard',
    template: `
<div class = "well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
        <div>
            Date:{{event.date}}
        </div>
        <div>
            Time:{{event.time}}
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
export class DashboardApp {
    @Input() event:any
}
