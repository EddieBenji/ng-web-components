import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: [ './form.component.scss' ]
})
export class FormComponent {
    form: FormGroup = new FormGroup({
        inputEmail4: new FormControl(null, Validators.required),
        inputPassword4: new FormControl(null, Validators.required),
        inputAddress: new FormControl(null, Validators.required),
        inputAddress2: new FormControl(null),
        inputCity: new FormControl(null, Validators.required),
        inputState: new FormControl(null, Validators.required),
        inputZip: new FormControl(null, Validators.required),
        gridCheck: new FormControl(null)
    });
    @Output() saveForm = new EventEmitter<any>();

    constructor() {
    }

    whenOnSave() {
        this.saveForm.emit(this.form.value);
    }

}
