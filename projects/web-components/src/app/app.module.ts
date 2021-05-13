import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
    declarations: [
        AppComponent,
        PopupComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [
        PopupComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(private injector: Injector) {
        // Convert `PopupComponent` to a custom element.
        const PopupElement = createCustomElement(PopupComponent, { injector });
        // Register the custom element with the browser.
        customElements.define('popup-element', PopupElement);
    }
}
