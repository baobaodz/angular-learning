import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  VERSION,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked
{
  @ViewChild('inputElement', { static: false }) inputElement: ElementRef;
  name = 'Angular ' + VERSION.major;
  type: {
    value: string;
    name: string;
  };
  constructor(el: ElementRef) {
    console.log('app constructor, el ', el);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('app ngOnChanges');
  }
  ngOnInit(): void {
    console.log('app onInit');
    // this.type = 'VUE';
    this.type = {
      value: 'Angular',
      name: 'Angular',
    };
    setTimeout(() => {
      console.log('app setTimeout');
    }, 0);

    this.type.name = 'VUE';
  }

  ngDoCheck(): void {
    console.log('app ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('app ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('app ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('app ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('app ngAfterViewInit');
    console.log('app inputElement ', this.inputElement);
    this.name = 'change';
  }
  inputChange(value) {
    console.log('app inputChange: value ', value);
  }
  nameChange(value) {
    console.log('app nameChange: value ', value);
  }

  click() {
    // this.type = {
    //   value: 'VUE',
    //   name: 'VUE',
    // };
  }
}
