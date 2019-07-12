import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';

const matComponentModules = [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
]

@NgModule({
    imports: matComponentModules,
    exports: matComponentModules
})
export class MatComponentModule {}
