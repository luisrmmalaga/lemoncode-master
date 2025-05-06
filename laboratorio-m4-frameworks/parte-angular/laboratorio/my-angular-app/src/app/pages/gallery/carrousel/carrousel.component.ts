import {
  Component,
  computed,
  effect,
  EventEmitter,
  Input,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { Image } from '../image.model';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  imports: [SlicePipe],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
  standalone: true,
})
export class CarrouselComponent {
  @Input()
  selectedImage: Image | undefined;
  @Input()
  images: Image[] = [];
  @Input()
  direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input()
  currentIndex: Signal<number> | undefined;

  @Output()
  imageChanged: EventEmitter<Image> = new EventEmitter<Image>();

  lowerLimit = signal(0);
  upperLimit = computed(() => {
    return this.lowerLimit() + 3;
  });

  constructor() {
    effect(() => {
      if (this.currentIndex) {
        const index = this.currentIndex();
        if (index < this.lowerLimit()) {
          this.lowerLimit.set(Math.max(0, index - 2));
        } else if (index >= this.upperLimit()) {
          this.lowerLimit.set(Math.min(this.images.length - 3, index));
        }
      }
    });
  }

  itemClicked(image: Image) {
    this.imageChanged.emit(image);
  }
}
