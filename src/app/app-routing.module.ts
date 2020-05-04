import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrimaryComponent} from './primary/primary.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {path: 'primary', component:PrimaryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
