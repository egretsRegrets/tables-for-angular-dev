import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullTableComponent } from './components';

@NgModule({
    imports: [CommonModule],
    declarations: [FullTableComponent],
    exports: [FullTableComponent]
})
export class TableUtilitiesModule {}