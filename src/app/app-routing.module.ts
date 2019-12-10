import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';

const routes: Routes = [
  { path: "add-contact", component: AddContactComponent, pathMatch: "full" },
  { path: "list-contacts", component: ListContactComponent, pathMatch: "full" },
  { path: "**", pathMatch: "full" , redirectTo: 'list-contacts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
