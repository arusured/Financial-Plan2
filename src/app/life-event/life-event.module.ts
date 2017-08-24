import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeEventComponent } from './life-event.component';
import { LifeEventRoutingModule } from './life-event-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LifeEventRoutingModule
  ],
  declarations: [LifeEventComponent]
})
export class LifeEventModule { }
