import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { SettingComponent } from './setting/setting.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { BlogPostingComponent } from './blog-posting/blog-posting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectUploadingComponent } from './project-uploading/project-uploading.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListingComponent,
    SettingComponent,
    AdminControlComponent,
    BlogPostingComponent,
    SidebarComponent,
    PanelComponent,
    ProjectUploadingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
