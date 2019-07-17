import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullTableComponent } from './components';
import { TuaBodyCellDirective, TuaColumnDirective } from './directives';

@NgModule({
    imports: [CommonModule],
    declarations: [FullTableComponent, TuaBodyCellDirective, TuaColumnDirective],
    exports: [FullTableComponent]
})
export class TableUtilitiesModule {}