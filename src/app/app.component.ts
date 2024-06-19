import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { HeaderComponent } from "./header/header.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, OrgChartComponent, HeaderComponent]
})
export class AppComponent {
  title = 'primeng';
}
