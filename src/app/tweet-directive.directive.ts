import { Directive, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { DynamicTweetComponent } from './dynamic-tweet/dynamic-tweet.component'

export interface AdComponent {
  data: any;
}

@Directive({
  selector: '[appTweetDirective]'
})
export class TweetDirectiveDirective {

  @Input('appTweetDirective')
  set Item(item:any){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicTweetComponent);
    let viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = item;
  }

  constructor(public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

}
