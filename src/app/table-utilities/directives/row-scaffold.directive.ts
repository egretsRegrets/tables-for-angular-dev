import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[tuaRow]'
})
export class RowScaffoldDirective implements OnChanges {
    @Input() tuaRowOf: any[];

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}

    ngOnChanges() {
        this.viewContainerRef.clear();
        this.tuaRowOf.forEach(row => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: row
            });
        });
    }
}