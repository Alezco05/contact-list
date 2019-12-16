import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';


@NgModule({
  declarations: [ScheduleComponent,AddContactComponent,ListContactComponent, CapitalizePipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ScheduleComponent,AddContactComponent,ListContactComponent]
})
export class ScheduleModule { }
