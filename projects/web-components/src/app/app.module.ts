import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';

@NgModule({
    declarations: [
        PopupComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    entryComponents: [
        PopupComponent
    ]
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
        // Convert `PopupComponent` to a custom element.
        const PopupElement = createCustomElement(PopupComponent, { injector });
        // Register the custom element with the browser.
        customElements.define('popup-element', PopupElement);
    }

    ngDoBootstrap(): void {
        // // Convert `PopupComponent` to a custom element.
        // const PopupElement = createCustomElement(PopupComponent, { injector: this.injector });
        // // Register the custom element with the browser.
        // customElements.define('popup-element', PopupElement);
    }
}
