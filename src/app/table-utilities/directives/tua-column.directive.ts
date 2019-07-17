import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

import { IColumn } from '../models';

@Directive({
    selector: '[tuaColumn]'
})
export class TuaColumnDirective implements OnChanges {
    
    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {}

    @Input() tuaColumnOf: any[] | IColumn[];

    ngOnChanges() {
        this.viewContainerRef.clear();
        this.tuaColumnOf.forEach(column => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: column
            })
        })
    }
}