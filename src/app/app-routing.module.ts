import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScionsComponent } from './scions/scions.component';

const routes: Routes = [
  { path: 'scions', component: ScionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
