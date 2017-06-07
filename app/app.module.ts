/**
 * Created by MN81683 on 6/6/2017.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {EventsAppComponent} from "./events-app.components";
import {EventListComponent} from "./events/events-list.components";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}