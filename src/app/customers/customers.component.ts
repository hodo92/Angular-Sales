import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewCommentsComponent } from '../view-comments/view-comments.component';


@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    displayedColumns = ['customer_id', 'firstName', 'lastName', 'phone', 'email', 'name', "customer-button-view", "customer-button-delete"];
    dataSource: MatTableDataSource<Customer>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

    
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
       
        this.dataSource.filter = filterValue;
        
        // for (let i = 0; i < this.dataSource.data.length; i++) {

        //     if (this.dataSource.data[i].company.name == filterValue)
        //         console.log ('hello');
        //         this.dataSource.filter = filterValue;
        //         // this.dataSource.data[i].company.name.filter = filterValue; 
        // }
        
    }

    ngOnInit() {
        this.customersService.getCustomers().subscribe((resp) => {
            this.dataSource = new MatTableDataSource(this.customersService.mapData( resp));
            this.dataSource.paginator = this.paginator;
        })
    }

    removeCustomer(customer_id: number) {
        console.log(customer_id);
        this.customersService.removeCustomer(customer_id).subscribe((resp) => {
            this.customersService.getCustomers().subscribe((resp) => {
                this.dataSource = new MatTableDataSource(this.customersService.mapData(resp));
                this.dataSource.paginator = this.paginator;
            });
        });
    };

    openDialog(cust: Customer): void {
        let dialogRef = this.dialog.open(ViewCommentsComponent, {
            data: cust
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('ok for dialog');
        })
    }
}


