import { Component } from '@angular/core';

@Component({
  selector: 'big-component',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css']
})
export class BigComponent {
  bigComponents = [
    {name:"Your sales" , period: "Last Year" , graph: "sales-graph"},
    {name:"Report" , period: "Last Year" , graph: "report-graph"}
  ]
}
