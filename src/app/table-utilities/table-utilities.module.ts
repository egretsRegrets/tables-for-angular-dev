import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullTableComponent } from './components';
import { RowScaffoldDirective, TableScaffoldDirective } from './directives';

@NgModule({
    imports: [CommonModule],
    declarations: [FullTableComponent, RowScaffoldDirective, TableScaffoldDirective],
    exports: [FullTableComponent]
})
export class TableUtilitiesModule {}