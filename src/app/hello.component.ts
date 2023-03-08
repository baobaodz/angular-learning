import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h2>Hello {{name}}!</h2>
    <h3>OK {{type?.name}}!</h3>
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HelloComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() name: string = '2023';
  type;
  @Input('type')
  set setType(value) {
    this.type = value;
    console.log('| -hello set, type ', value);
  }
  @Output() nameChange = new EventEmitter<any>();

  constructor(private el: ElementRef, private changeRef: ChangeDetectorRef) {
    console.log('| -hello constructor, el ', el);
    // this.changeRef.markForCheck();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('| -hello ngOnChanges changes', changes);
  }
  ngOnInit(): void {
    console.log('| -hello onInit');
  }

  ngDoCheck(): void {
    console.log('| -hello ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('| -hello ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('| -hello ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('| -hello ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('| -hello ngAfterViewInit');
    this.nameChange.emit('test');
  }
  ngOnDestroy(): void {}
}
