import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AgentComponent } from './agent/agent.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import { JobsComponent } from './jobs/jobs.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LoginComponent } from './login/login.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';
import { DocumentViewerModule } from '@txtextcontrol/tx-ng-document-viewer';


registerLocaleData(en);

@NgModule({ declarations: [
        AppComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BlogComponent,
        ContactComponent,
        AgentComponent,
        PrivacyComponent,
        TermOfUseComponent,
        JobsComponent,
        AdvertiseComponent,
        SellComponent,
        BuyComponent,
        RentComponent,
        CommercialComponent,
        LoginComponent,
        BlogViewComponent,
        PropertyViewComponent,
        ProjectViewComponent
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [BrowserModule,
        AppRoutingModule,
        SwiperComponent,
        ReactiveFormsModule,
        NzCascaderModule,
        FormsModule,
        BrowserAnimationsModule,
        DocumentEditorModule,
        DocumentViewerModule], providers: [
        { provide: NZ_I18N, useValue: en_US },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
