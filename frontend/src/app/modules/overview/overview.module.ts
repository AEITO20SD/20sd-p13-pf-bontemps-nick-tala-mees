import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOverviewPageComponent } from './pages/table-overview-page/table-overview-page.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableOverviewPageComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class OverviewModule { }
