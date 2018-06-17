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

    getThisCustomer(customer_id:number): Observable<Customer> {
        return this.http.get<Customer>('/customers/getThisCustomer/' + customer_id);
    }


addNewCustomer(cust:Customer){

    return this.http.post<Customer>('/customers/addCustomer',cust ) ; 
}

    removeCustomer(customer_id: number) {
        return this.http.delete<Customer>('/customers/removeCustomer/' + customer_id);
    }

    getComments(customer_id: number): Observable<Comment[]>{
        console.log(customer_id);
        return this.http.get<Comment[]>('/customers/getComments/' + customer_id);
    }

}



