/**
 * Created by MN81683 on 6/6/2017.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Ramesh is Learning Angular Components</h1>
            <hr>
            <!-- @Input Passing Data into child Component below [event]-->
            <!-- @Output Parent receiving data in the child event (eventClick-->
            <event-thumbnail (eventClick)="handleClickEvent($event)" [event]="event1"></event-thumbnail>
        </div>
    `
})
export class EventListComponent {

    event1 = {

        id: 1,
        name:'Angular One Way Data Binding',
        date: '6/6/2017',
        time: '10:00 pm',
        price: 500,
        location: {
            address:'100 Main Street',
            city: 'Hartford',
            country: 'USA'
        }
    }

    handleClickEvent(data){
        console.log(data);
    }
}
