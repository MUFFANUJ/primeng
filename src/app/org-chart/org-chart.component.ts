import { Component } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { dataModule } from '../module/data.module';

@Component({
    selector: 'app-org-chart',
    standalone: true,
    imports: [OrganizationChartModule,FormsModule],
    templateUrl: './org-chart.component.html',
    styleUrl: './org-chart.component.scss'
})
export class OrgChartComponent {
    constructor(private dataService: dataModule) { }
    data = this.dataService.data
    handleSelection(key: string, node: TreeNode) {
        node.data.selected = !node.data.selected;
    }
    
}
