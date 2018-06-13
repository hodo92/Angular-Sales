import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Company} from "./company" ; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {


    private companies_api = "/companies/companies-api";


    constructor(private http: HttpClient) { }

    getCompanies():Observable<Company[]> {

        return this.http.get<Company[]>(this.companies_api);
    }


}
