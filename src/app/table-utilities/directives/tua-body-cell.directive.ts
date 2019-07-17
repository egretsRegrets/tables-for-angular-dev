import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[tuaBodyCell]'
})
export class TuaBodyCellDirective implements OnChanges {
    @Input() tuaBodyCellOf: any[];

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}

    ngOnChanges() {
        this.viewContainerRef.clear();
        this.tuaBodyCellOf.forEach(row => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: row
            });
        });
    }
}