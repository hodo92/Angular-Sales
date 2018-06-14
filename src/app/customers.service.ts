import { Injectable } from '@angular/core';

import { Customer } from './customer'; 

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

    private customers_api = "/customers/customers-api";

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {

        return this.http.get<Customer[]>(this.customers_api);
    }

addNewCustomer(cust:Customer){
    return this.http.post<Customer>('/customers/addCustomer',cust ) ; 
}
}
