import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    // public props
    campaignData: any[]
    constructor( private dataService: DataService ) {}
    
    ngOnInit() {
        this.dataService.getCampaigns().subscribe(campaignData => (this.campaignData = campaignData));
    }
}