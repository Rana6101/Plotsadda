import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { BlogPostingComponent } from './blog-posting/blog-posting.component';
import { ListingComponent } from './listing/listing.component';
import { SettingComponent } from './setting/setting.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuardGuard } from '../services/auth-guard.guard';
import { ProjectUploadingComponent } from './project-uploading/project-uploading.component';

const routes: Routes = [
  
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'panel',
        pathMatch:'full',
      },
      {
        path:'panel',
        component:PanelComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'admin_control',
        component:AdminControlComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'blog_posting',
        component:BlogPostingComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'project_upload',
        component:ProjectUploadingComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'listing',
        component:ListingComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:'setting',
        component:SettingComponent,
        canActivate:[AuthGuardGuard]
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
