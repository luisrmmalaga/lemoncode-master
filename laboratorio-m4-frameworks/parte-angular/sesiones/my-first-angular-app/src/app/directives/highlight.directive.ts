import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input()
  color!: string;

  private defaultColor: string = 'lightblue';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || this.defaultColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = this.color;
  }
}
