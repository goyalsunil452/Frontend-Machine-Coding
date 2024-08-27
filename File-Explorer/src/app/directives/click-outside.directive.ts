import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside: EventEmitter<void> = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      console.log('Clicked outside');
      this.clickOutside.emit();
    } else {
      console.log('Clicked inside');
    }
  }
}
