import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ChartModule } from 'angular2-highcharts';
import {MatGridListModule} from '@angular/material/grid-list';
import { TweetComponent } from './tweet/tweet.component';
import { DynamicTweetComponent } from './dynamic-tweet/dynamic-tweet.component';
import { TweetDirectiveDirective } from './tweet-directive.directive';

export const jsonSchemaFormModuleForRoot: ModuleWithProviders = ChartModule.forRoot(
  require('highcharts')
)

 
@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    DynamicTweetComponent,
    TweetDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    jsonSchemaFormModuleForRoot,
    ScrollDispatchModule,
    MatGridListModule
  ],
  providers: [],
  entryComponents: [ DynamicTweetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
