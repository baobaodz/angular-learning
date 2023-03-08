import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'byebye',
  template: `
    <h2>byebye {{name}}!</h2>
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ByeByeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() name: string;
  type;
  @Input('type')
  set setType(value) {
    this.type = value;
    console.log('| -byebye set, type ', value);
  }
  constructor(el: ElementRef) {
    console.log('| -byebye constructor, el ', el);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('| -byebye ngOnChanges changes', changes);
  }
  ngOnInit(): void {
    console.log('| -byebye onInit');
  }

  ngDoCheck(): void {
    console.log('| -byebye ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('| -byebye ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('| -byebye ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('| -byebye ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('| -byebye ngAfterViewInit');
  }
}
