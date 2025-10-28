import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyDashboardRoutingModule } from './agency-dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';
import { AgencyListingComponent } from './agency-listing/agency-listing.component';
import { AgencySidebarComponent } from './agency-sidebar/agency-sidebar.component';
import { AgencyPanelComponent } from './agency-panel/agency-panel.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { AddMemberComponent } from './add-member/add-member.component';


@NgModule({
  declarations: [
    AgencyDashboardComponent,
    AgencyListingComponent,
    AgencySidebarComponent,
    AgencyPanelComponent,
    ProfileSettingComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    AgencyDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AgencyDashboardModule { }
