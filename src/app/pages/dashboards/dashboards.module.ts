import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SimplebarAngularModule } from 'simplebar-angular';

import { DefaultComponent } from './default/default.component';
import { SettingComponent } from './setting/setting.component';
import { SaasComponent } from './saas/saas.component';


import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { InforPublicComponent } from './inforPublic/inforPublic.component';

import {  NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [DefaultComponent, SaasComponent, SettingComponent,InforPublicComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    ModalModule.forRoot(),
    CdkStepperModule,
    NgStepperModule,
  ],
  providers: [BsDropdownConfig],
})
export class DashboardsModule { }
