import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../model/summary';

@Component({
  selector: 'app-summary-label',
  templateUrl: './summary-label.component.html',
  styleUrls: ['./summary-label.component.css']
})
export class SummaryLabelComponent implements OnInit {
  @Input() summary!:Summary;
  hasImg:boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.summary);
    console.log(this.summary.employer.logo_urls.original+"");
    if(this.summary.employer.logo_urls.original){
      this.hasImg=true;
    }
  }

}
