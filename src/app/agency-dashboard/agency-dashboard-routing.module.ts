import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import {AgencyDashboardComponent} from './agency-dashboard/agency-dashboard.component'
import { AgencyListingComponent } from './agency-listing/agency-listing.component';
import { AgencyPanelComponent } from './agency-panel/agency-panel.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';

const routes: Routes = [
  {
    path:'',
    component: AgencyDashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'panel',
        pathMatch:'full',
      },
      {
        path: 'panel',
        component:AgencyPanelComponent
      },
      {
        path:'listing',
        component:AgencyListingComponent
      },
      {
        path:'addMember',
        component:AddMemberComponent
      },
      {
        path:'profileSetting',
        component:ProfileSettingComponent
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyDashboardRoutingModule { }
