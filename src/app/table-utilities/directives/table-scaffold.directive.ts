import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

import { IColumn } from '../models';

@Directive({
    selector: '[tuaTable]'
})
export class TableScaffoldDirective implements OnChanges {
    
    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {}

    @Input() tuaTableOf: any[] | IColumn[];

    ngOnChanges() {
        this.viewContainerRef.clear();
        this.tuaTableOf.forEach(column => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: column
            })
        })
    }
}