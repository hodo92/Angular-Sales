import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies/companies.component';
import { CustomersComponent } from './customers/customers.component' ; 

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: CompaniesComponent },
    { path: 'customers', component: CustomersComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
