import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    displayedColumns = ['customer_id', 'firstName', 'lastName', 'phone', 'email', 'name', "customer-button-delete"];
    dataSource: MatTableDataSource<Customer>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router) { }

    

    ngOnInit() {
        this.customersService.getCustomers().subscribe((resp) => {
            this.dataSource = new MatTableDataSource(resp);
            this.dataSource.paginator = this.paginator;
            
        })
    }

    removeCustomer(customer_id: number) {
        console.log(customer_id);
        this.customersService.removeCustomer(customer_id).subscribe((resp) => {
            this.customersService.getCustomers().subscribe((resp) => {
                this.dataSource = new MatTableDataSource(resp);
            });
        });
    };

    }


