import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../company';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
    // public companies: Array<Company>
    displayedColumns = ['company_id', 'name', 'address', 'country'];
    dataSource: MatTableDataSource<Company>;
    constructor(private companiesService: CompaniesService) { }

    ngOnInit() {
        this.companiesService.getCompanies().subscribe((resp) => {
            this.dataSource = new MatTableDataSource(resp);
            console.log(this.dataSource);
        })
    }

}