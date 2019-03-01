import { Component, OnInit, Input } from '@angular/core';



@Component({
  templateUrl: './dynamic-tweet.component.html',
  styleUrls: ['./dynamic-tweet.component.scss']
})
export class DynamicTweetComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
