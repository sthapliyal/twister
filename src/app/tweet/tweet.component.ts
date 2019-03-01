import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  items;

  constructor() { }

  ngOnInit() {


    this.items = Array
  .from({length: 100000})
  .map((e, i) => {
    let obj = {};
    obj['name'] = `user #${i}`,
      obj['twitHandle'] = `user#${i}@twitter.com`
    obj['msg']=`The quick brown fox jumps over a lazy dog. #${i}`
    return obj;
  });


  }

}
