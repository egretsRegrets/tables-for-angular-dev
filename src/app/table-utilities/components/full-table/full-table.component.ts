import { Component, Input } from '@angular/core';

import { IColumn } from '../../models';

@Component({
    selector: 'full-table',
    templateUrl: './full-table.component.html',
    styleUrls: ['full-table.component.css']
})
export class FullTableComponent {
    @Input() config: IColumn[];
    @Input() data: any[];
}
