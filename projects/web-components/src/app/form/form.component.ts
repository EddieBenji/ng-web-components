import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type UIElementParams = { params: any, url: string };

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
    form: FormGroup = new FormGroup({
        inputEmail4: new FormControl(null, Validators.required),
        inputPassword4: new FormControl(null, Validators.required),
        inputAddress: new FormControl(null, Validators.required),
        inputAddress2: new FormControl(null),
        inputCity: new FormControl(null, Validators.required),
        inputState: new FormControl(null, Validators.required),
        inputZip: new FormControl(null, Validators.required),
        inputForwarders: new FormControl(null, Validators.required),
        gridCheck: new FormControl(null)
    });

    @Input()
    set UIElements(UIElements: UIElementParams) {
        this.dropDownItems = <string[]>UIElements.params.forwarders.map((param: { name: string }) => param.name);
    }

    dropDownItems = [ '' ];

    @Output() saveForm = new EventEmitter<any>();
    @Output() doGetRequest = new EventEmitter<any>();

    constructor() {
    }

    whenOnSave() {
        this.saveForm.emit(this.form.value);
    }

    ngOnInit(): void {
        this.doGetRequest.emit({ url: 'assets/dummy-response.json' });
    }

}
