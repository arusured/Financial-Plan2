import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //NgFrom使うには必要？

import {FamilyService } from './family.service'; //入れてみた

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyUpdateComponent } from './family-update/family-update.component';
import { RelationshipPipe } from './relationship.pipe';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule,
    FormsModule
  ],
  providers: [ FamilyService ], //入れてみた
  declarations: [FamilyComponent, FamilyDetailComponent, FamilyInputComponent, FamilyListComponent, FamilyUpdateComponent, RelationshipPipe]
})
export class FamilyModule { }
