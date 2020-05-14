import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryComponent} from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ParentalcontrolComponent } from './parentalcontrol/parentalcontrol.component';

 

const routes: Routes = [
  {path: '**', component:HomeComponent},
  {path:'home', component: HomeComponent},
  { path: 'primary', component: PrimaryComponent },
  { path: 'secondary', component: SecondaryComponent },
  { path: 'parentalcontrol', component: ParentalcontrolComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
