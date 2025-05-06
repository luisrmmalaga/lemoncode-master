import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'img[appRotate]',
})
export class RotateDirective implements OnInit {
  private elementRef = inject(ElementRef);

  @Input({ required: true })
  rotate: number = 0;

  @Input()
  step: number = 10;

  @HostListener('click', ['$event'])
  elementClicked(event: KeyboardEvent) {
    this.recalculateRotation(event.shiftKey);
    this.applyRotation();
  }

  ngOnInit() {
    this.applyRotation();
  }

  recalculateRotation(shiftClicked: boolean) {
    if (shiftClicked) {
      this.rotate -= this.step;
      return;
    }
    this.rotate += this.step;
  }

  applyRotation() {
    this.elementRef.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
  }
}
