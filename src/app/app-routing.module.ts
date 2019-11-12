import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScionsComponent } from './scions/scions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScionDetailComponent } from './scion-detail/scion-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ScionDetailComponent },
  { path: 'scions', component: ScionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
