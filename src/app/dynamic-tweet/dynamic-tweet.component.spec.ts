import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTweetComponent } from './dynamic-tweet.component';

describe('DynamicTweetComponent', () => {
  let component: DynamicTweetComponent;
  let fixture: ComponentFixture<DynamicTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
