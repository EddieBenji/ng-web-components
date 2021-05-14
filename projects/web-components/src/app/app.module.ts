import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        PopupComponent,
        FormComponent
    ],
    providers: [],
    entryComponents: [
        PopupComponent,
        FormComponent
    ]
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    /**
     * With this approach (Creating an ng app with projects), we must implement the DoBootstrap and remove the bootstrap array from the
     * ngModule decorator.
     */
    ngDoBootstrap(): void {
        this.createCustomEl(PopupComponent, 'popup-element');
        this.createCustomEl(FormComponent, 'form-element');
    }

    private createCustomEl(component: Type<any>, tagName: string): void {
        // Convert `PopupComponent` to a custom element.
        const customEl = createCustomElement(component, { injector: this.injector });
        // Register the custom element with the browser.
        customElements.define(tagName, customEl);
    }
}
