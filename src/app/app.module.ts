import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompaniesService } from './companies.service';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './/app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
      MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatTableModule,
      MatPaginatorModule,
      AppRoutingModule,
      MatToolbarModule
      
      
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
