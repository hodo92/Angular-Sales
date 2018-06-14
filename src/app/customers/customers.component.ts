import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    displayedColumns = ['customer_id', 'firstName', 'lastName', 'company_id', 'email','phone'];
    dataSource: MatTableDataSource<Customer>;


    constructor(private customersService: CustomersService) { }


    ngOnInit() {
        this.customersService.getCustomers().subscribe((resp) => {
            this.dataSource = new MatTableDataSource(resp);
            console.log(this.dataSource);
        })
    }

}
