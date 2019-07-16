import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { campaignColumnConfig } from './const';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    // public props
    campaignsData: any[];
    campaignColumnConfig = campaignColumnConfig;
    constructor( private dataService: DataService ) {}
    
    ngOnInit() {
        this.dataService.getCampaigns().subscribe(campaignData => (this.campaignsData = campaignData));
    }
}