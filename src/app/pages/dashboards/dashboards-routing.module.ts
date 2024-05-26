import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { SaasComponent } from './saas/saas.component';
import { SettingComponent } from './setting/setting.component';
import { InforPublicComponent } from './inforPublic/inforPublic.component';
const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'inforPublic',
        component: InforPublicComponent
    },
    {
        path: 'saas',
        component: SaasComponent
    },
    {
        path: 'setting',
        component: SettingComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
