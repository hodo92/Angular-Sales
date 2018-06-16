import { Component, OnInit, ViewChild} from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../company';
import { MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
    
    displayedColumns = ['company_id', 'name', 'address', 'country', 'customer-button', "company-button-delete"];
    dataSource: MatTableDataSource<Company>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private companiesService: CompaniesService) { }

    ngOnInit() {
        this.companiesService.getCompanies().subscribe((resp) => {
            this.dataSource = new MatTableDataSource(resp);
            this.dataSource.paginator = this.paginator;
        })
    }


}