import { Component, OnInit } from '@angular/core';

import {Customer} from '../customer';

import { CustomersService } from '../customers.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
newCustomer = new Customer ; 

    constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router
) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.newCustomer.company_id = params.id
          console.log(this.newCustomer.company_id)
      })
  }

addCustomer(cust:Customer){
    this.newCustomer=cust ; 
    console.log(this.newCustomer); 
    this.customersService.addNewCustomer(this.newCustomer) ; 
this.router.navigate(['customers'])
}
}
