import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}

    getCampaigns(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/campaigns');
    }
}