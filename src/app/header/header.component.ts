import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { dataModule } from '../module/data.module';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


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

export class HeaderComponent {
  cities: City[] | undefined;
  constructor(private dataService: dataModule) { }
  selectedCity: City | undefined;
  choosenName!: String;
  data = this.dataService.data



  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  // onChange(){
  //   this.searchByKey(this.data,this.choosenName)
  // }

  searchByKey(data: TreeNode[], key: String): TreeNode | null {
    for (const i of this.data) {
      if (i.data.selected) {
        i.data.selected = false;
      }
      if (i.data.name.toLowerCase().includes(key.toLowerCase())) {
        i.data.selected = true;
        return i
      }
      if (i.children) {
        const result = this.searchByKey(i.children, key);
        if (result) {
          return result
        }
      }
    }
    return null
  }
  
}
