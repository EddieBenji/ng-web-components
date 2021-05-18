import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type UIElementParams = { params: any, url: string };
const URL_APIS = {
    FORWARDERS: 'http://localhost:5500/api/forwarders',
    TEST_CONNECTION: 'http://localhost:5500/api/test/mock-server'
};

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
    form: FormGroup = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        forwarders: new FormControl(null, Validators.required),
        serverIp: new FormControl(null)
    });

    @Input()
    set UIElements(UIElements: UIElementParams) {
        console.log('on the web component it self: ->', UIElements);
        if (URL_APIS.FORWARDERS === UIElements.url) {
            this.dropDownItems = <string[]>UIElements.params.map((param: { name: string }) => param.name);
        }
    }

    dropDownItems = [ '' ];

    @Output() saveForm = new EventEmitter<any>();
    @Output() doGetRequest = new EventEmitter<{ url: string }>();
    @Output() doPostRequest = new EventEmitter<{ url: string, body: any }>();

    constructor() {
    }

    whenOnSave() {
        this.saveForm.emit(this.form.value);
    }

    ngOnInit(): void {
        this.doGetRequest.emit({ url: URL_APIS.FORWARDERS });
    }

    doTestConnection(): void {
        this.doPostRequest.emit({
            url: URL_APIS.TEST_CONNECTION, body: {
                serverIp: this.form.get('serverIp')?.value
            }
        });
    }

}
