import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ModelsComponent } from './components/models/models.component';
import { TeamComponent } from './components/team/team.component';
import { ReserveComponent } from './components/reserve/reserve.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Models',
    component: ModelsComponent
  },
  {
    path: 'Reserve',
    component: ReserveComponent
  },
  {
    path: 'Team',
    component: TeamComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
