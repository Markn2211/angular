/**
 * Created by MN81683 on 6/7/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";



@Component({
    selector:'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
        </div>
    `
})
export class EventThumbnailComponent {
    // Add @Input decorator when constructing child component
    // in order to give that child component data
    @Input() event:any;

    // Add @Output decorator in response to some event with a child
    // component so that the parent can receive some information in an
    // event like a button click within the child component
     @Output() eventClick = new EventEmitter();

     handleClickMe() {
        this.eventClick.emit('foo');
    }

}