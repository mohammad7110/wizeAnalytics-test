import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/shared-common/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MainLayoutComponent } from '../shared/component/main-layout/main-layout.component';
// import { DefaultComponent } from './component/default/default.component';


const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        // canActivate: [AuthGuardService],
        children: [
            { path: '', component: DashboardComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
