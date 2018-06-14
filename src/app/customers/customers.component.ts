import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    displayedColumns = ['customer_id', 'firstName', 'lastName', 'phone' , 'email', 'name'];
    dataSource: MatTableDataSource<Customer>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private customersService: CustomersService) { }


    ngOnInit() {
        this.customersService.getCustomers().subscribe((resp) => {
            this.dataSource = new MatTableDataSource(resp);
            console.log(this.dataSource)
            this.dataSource.paginator = this.paginator;
        })
    }

}
