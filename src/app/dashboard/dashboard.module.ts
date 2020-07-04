import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from '../shared/shared-common/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
    declarations: [DashboardComponent, MainLayoutComponent],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
        ChartsModule
    ]
})
export class DashboardModule { }
