import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-my-popup',
    templateUrl: './popup.component.html',
    styleUrls: [ './popup.component.scss' ],
    animations: [
        trigger('state', [
            state('opened', style({ transform: 'translateY(0%)' })),
            state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
            transition('* => *', animate('100ms ease-in'))
        ])
    ]
})
export class PopupComponent implements OnInit {
    @HostBinding('@state')
    state: 'opened' | 'closed' = 'closed';

    @Input()
    get message(): string {
        return this._message;
    }

    set message(message: string) {
        this._message = message;
        this.state = 'opened';
    }

    // tslint:disable-next-line:variable-name
    private _message = '';

    @Output()
    closed = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    whenClickedCloseButton(): void {
        this.closed.emit({
            data: {
                firstName: 'Eduardo',
                lastName: 'Canche',
                location: 'Mexico',
                position: 'Engineer',
                message: this._message
            }
        });
    }

}
