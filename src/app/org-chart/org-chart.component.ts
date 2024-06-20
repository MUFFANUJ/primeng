import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrganizationChart, OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { dataModule } from '../module/data.module';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-org-chart',
    standalone: true,
    imports: [OrganizationChartModule,FormsModule,CardModule],
    templateUrl: './org-chart.component.html',
    styleUrl: './org-chart.component.scss'
})
export class OrgChartComponent {
  @ViewChild('orgChart') orgChart!: OrganizationChart;
    constructor(private dataService: dataModule,private elementRef: ElementRef) { }
    searchName = this.dataService.searchName;
    foundNode: TreeNode | null = null;
    zoomLevel = 1; // Initial zoom level
    maxZoomLevel = 2; // Max allowed zoom level
    minZoomLevel = 0.5; // Min allowed zoom level

    zoomContainerRight!: number;
 zoomIn() {
    if (this.zoomLevel < this.maxZoomLevel) {
      this.zoomLevel += 0.1;
      this.updateZoom();
    }
  }

  zoomOut() {
    if (this.zoomLevel > this.minZoomLevel) {
      this.zoomLevel -= 0.1;
      this.updateZoom();
    }
  }

  simply(word:string){
    console.log(word)
  }
  updateZoom() {
    const orgChart = document.querySelector('.p-organizationChart') as HTMLElement;
    if (orgChart) {
      orgChart.style.transform = `scale(${this.zoomLevel})`;
    }
  }

    updateZoomContainerRight() {
      const viewportWidth = window.innerWidth;
      const cardWidth = viewportWidth * this.zoomLevel;
      this.zoomContainerRight = viewportWidth - cardWidth;
    }

    data = this.dataService.data
    handleSelection(node: TreeNode) {
        node.data.selected = !node.data.selected;
    }

    ngAfterViewInit(): void {
      // Access the p-organizationChart DOM elements after it is initialized
      if (this.orgChart) {
        const chartNodes = Array.from(this.orgChart.el.nativeElement.querySelectorAll('.p-organizationchart-node-content'));
      }
    }
  
    search(): void {
      console.log("Mind Blowing already")
      if (!this.dataService.getName()) return; 
      const chartNodes = this.orgChart.el.nativeElement.querySelectorAll('.p-organizationchart-node-content');
      if (chartNodes) {
        let foundNode = null;
        chartNodes.forEach((node: HTMLElement) => {
          const nodeText = node.textContent || node.innerText;
          if (nodeText.toLowerCase().includes(this.dataService.getName().toLowerCase())) {
            foundNode = node;
            console.log(foundNode)
            return; 
          }
        });  
        if (foundNode) {
          this.scrollToNode(foundNode);
        } else {
          console.log(`Node with text '${this.dataService.getName()}' not found.`);
        }
      }
    }
    scrollToNode(node: HTMLElement): void {
      node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
    
}
