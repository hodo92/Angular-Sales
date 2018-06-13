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


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
      MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatTableModule,
      MatPaginatorModule
      
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
