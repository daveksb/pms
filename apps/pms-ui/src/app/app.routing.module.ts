import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  EntranceComponent,
  ExitComponent,
  LoginComponent,
  MonitorComponent,
} from '@pms/pages';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'entrance', component: EntranceComponent },
  { path: 'exit', component: ExitComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  /*   {
    path: 'register',
    loadChildren: () =>
      import('@ksp/self-service/feature/register').then(
        (m) => m.SelfServiceFeatureRegisterModule
      ),
  },
 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
