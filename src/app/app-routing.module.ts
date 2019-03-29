import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
 {
   path:'',
   component: LoginComponent
 },
 {
  path: 'home',
  component: HomeComponent
},
{
  path: 'cards',
  component: CardsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
