import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Summary } from '../model/summary';

@Component({
  selector: 'app-summarys-page',
  templateUrl: './summarys-page.component.html',
  styleUrls: ['./summarys-page.component.css']
})
export class SummarysPageComponent implements OnInit {

  constructor(private data: DataService) { }
  summarys: Summary[] = [];
  ngOnInit(): void {
    this.data.getSummarys().subscribe((data) => {
      this.summarys = data;
      console.log(this.summarys);
    });
  }

}
