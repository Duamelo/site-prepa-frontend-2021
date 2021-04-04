import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  /*{
    path: 'login', loadChildren: ()=> import('./views/session/login/login.component').then(m=> m.LoginComponent)
  },*/
  {
    path:'', component: HomeComponent
  },
  {
    path:'accueil',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
