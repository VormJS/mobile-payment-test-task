import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorListComponent } from './components/operator-list/operator-list.component';
import { OperatorFormComponent } from './components/operator-form/operator-form.component';


const routes: Routes = [
  { path: '',  component:OperatorListComponent, pathMatch: 'full' },
  { path: 'operators/:id', component: OperatorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
