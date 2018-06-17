import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';

import { MatButtonModule, MatCheckboxModule, MatDialogModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompaniesService } from './companies.service';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './/app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material';

import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { CommentsComponent } from './comments/comments.component' ; 



@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CustomersComponent,
    AddCustomerComponent,
    ViewCommentsComponent,
    CommentsComponent
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
      MatToolbarModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule
      
      
  ],

    entryComponents: [
        ViewCommentsComponent],

  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
