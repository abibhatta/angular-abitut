import { Component, OnInit } from '@angular/core';

import { samples } from '../samples';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
samples = samples;
  constructor() { }

  ngOnInit() {
  }

}