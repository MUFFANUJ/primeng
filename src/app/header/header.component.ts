import { Component, OnInit, ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { dataModule } from '../module/data.module';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrgChartComponent } from '../org-chart/org-chart.component';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, DropdownModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent{
  cities: City[] | undefined;
  @ViewChild(OrgChartComponent) orgChartComponent!: OrgChartComponent;
  // orgChart: any;
  constructor(private dataService: dataModule,private elementRef: ElementRef) {}
  selectedCity: City | undefined;
  choosenName!: string;
  // data = this.dataService.data
  // searchName = this.dataService.searchName;
  // searchName: string = '';
  foundNode: TreeNode | null = null;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  
    // Example: Call scroll function on keydown event
    
    // this.elementRef.nativeElement.addEventListener('keydown', (event:Event) => {
    //   if (event.key === 'Enter') {
    //     this.orgChart.scrollToNode('nodeKey'); // Replace 'nodeKey' with the actual node key
    //   }
    // });
  

  search(): void {
    console.log("nope")
    this.orgChartComponent.simply("searchTerm");
    this.foundNode = this.dataService.findNodeByName(this.choosenName);
    this.dataService.updateSearchName(this.choosenName);
    if (!this.foundNode) {
      // console.log(`Node with name '${this.searchName}' not found.`);
    }else{
      // console.log(`Node with name '${this.searchName}' found.`);
      
      
    }
  }
  // onEnter(): void {
  //   console.log("Entered")
  //   if (!this.dataService.getName()) return; 

  //   const chartNodes = this.OrgChartComponent.orgChart.el.nativeElement.querySelectorAll('.p-organizationchart-node-content');
  //   if (chartNodes) {
  //     let foundNode = null;
  //     chartNodes.forEach((node: HTMLElement) => {
  //       const nodeText = node.textContent || node.innerText;
  //       if (nodeText.toLowerCase().includes(this.dataService.getName().toLowerCase())) {
  //         foundNode = node;
  //         console.log(foundNode)
  //         return; 
  //       }
  //     });

  //     if (foundNode) {
  //       this.scrollToNode(foundNode);
  //     } else {
  //       console.log(`Node with text '${this.dataService.getName()}' not found.`);
  //     }
  //   }
  // }

  // scrollToNode(node: HTMLElement): void {
  //   node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  // }
}
