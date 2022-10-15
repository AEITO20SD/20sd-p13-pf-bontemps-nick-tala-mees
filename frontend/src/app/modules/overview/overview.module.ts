import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOverviewPageComponent } from './pages/table-overview-page/table-overview-page.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AddOnComponent } from './components/add-on/add-on.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { TableDetailsComponent } from './pages/table-details/table-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TableOverviewPageComponent,
    TableComponent,
    AppBarComponent,
    AddOnComponent,
    ReceiptComponent,
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class OverviewModule { }
