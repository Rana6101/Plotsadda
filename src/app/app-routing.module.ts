import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AgentComponent } from './agent/agent.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LoginComponent } from './login/login.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: "/home",
    pathMatch:'full'
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"advertise",
    component:AdvertiseComponent
  },
  {
    path:"agent",
    component:AgentComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"blog_view/:id",
    component:BlogViewComponent
  },
  {
    path:"property_view/:id",
    component:PropertyViewComponent
  },
  {
    path:"project_view/:id",
    component:ProjectViewComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:'job',
    component:JobsComponent
  },
  {
    path:"privacy",
    component:PrivacyComponent
  },
  {
    path:'term_of_use',
    component:TermOfUseComponent
  },
  {
    path:'sell',
    component:SellComponent
  },
  {
    path:'buy',
    component:BuyComponent
  },
  {
    path:'rent',
    component:RentComponent
  },
  {
    path:'commercial',
    component:CommercialComponent
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
