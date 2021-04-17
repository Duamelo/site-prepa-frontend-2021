import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {
    path:'', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path:'accueil', component: HomeComponent
  },
  {
    path: 'forum', loadChildren: ()=> import('./views/forum/mathematiques/mathematiques.module').then(m => m.MathematiquesModule)
  },
  {
    path: 'forum', loadChildren: ()=> import('./views/forum/physiques/physiques.module').then(m => m.PhysiquesModule)
  },
  {
    path: 'forum', loadChildren: ()=> import('./views/forum/informatique/informatique.module').then(m => m.InformatiqueModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
