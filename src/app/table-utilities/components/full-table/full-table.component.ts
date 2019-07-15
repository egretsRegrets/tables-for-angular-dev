import { Component, Input } from '@angular/core';

@Component({
    selector: 'full-table',
    templateUrl: './full-table.component.html',
    styleUrls: ['full-table.component.css']
})
export class FullTableComponent {
    @Input() config: any;
    @Input() data: any[];
}
