import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [{
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  //  {
  //   path: 'home',
  //   loadChildren: () => import('./shared/layout/main-layout/main-layout.module').then(m => m.MainLayoutModule)
  // },
  { path: '', redirectTo: 'login',pathMatch: 'full'  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
