import { Component, computed, effect, signal } from '@angular/core';
import { Image } from './image.model';
import { IMAGES } from './image.data';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { Button } from './button-bar/button.model';
import { RotateDirective } from './directives/rotate/rotate.directive';

@Component({
  selector: 'app-gallery',
  imports: [CarrouselComponent, ButtonBarComponent, RotateDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images: Image[] = IMAGES;
  selectedImage = signal(this.images[0]);
  currentIndex = computed(() => {
    return this.images.findIndex((image) => image === this.selectedImage());
  });

  zoomIn: boolean = false;
  zoomOut: boolean = false;

  playerOn = signal(false);

  buttons: Button[] = [
    {
      id: '1',
      icon: 'fa-solid fa-heart',
      label: 'Previous',
      action: () => {
        this.selectedImage.set(this.getPreviousImage());
      },
      disabled: () => {
        return this.currentIndex() === 0;
      },
      hidden: () => {
        return false;
      },
    },
    {
      id: '2',
      icon: 'fa-solid fa-share-nodes',
      label: 'Next',
      action: () => {
        this.selectedImage.set(this.getNextImage());
      },
      disabled: () => {
        return this.currentIndex() === this.images.length - 1;
      },
      hidden: () => {
        return false;
      },
    },
    {
      id: '3',
      icon: 'fa-solid fa-download',
      label: 'Zoom In',
      action: () => {
        if (this.zoomIn) {
          this.resetZoom();
          return;
        }

        this.zoomIn = true;
        this.zoomOut = false;
      },
      disabled: () => {
        return false;
      },
      hidden: () => {
        return false;
      },
    },
    {
      id: '4',
      icon: 'fa-solid fa-trash-can',
      label: 'Zoom Out',
      action: () => {
        if (this.zoomOut) {
          this.resetZoom();
          return;
        }

        this.zoomIn = false;
        this.zoomOut = true;
      },
      disabled: () => {
        return false;
      },
      hidden: () => {
        return false;
      },
    },
    {
      id: '5',
      icon: 'fa-solid fa-heart',
      label: 'Play',
      action: () => {
        this.playerOn.set(true);
      },
      disabled: () => {
        return false;
      },
      hidden: () => {
        return this.playerOn();
      },
    },
    {
      id: '6',
      icon: 'fa-solid fa-share-nodes',
      label: 'Stop',
      action: () => {
        this.playerOn.set(false);
      },
      disabled: () => {
        return false;
      },
      hidden: () => {
        return !this.playerOn();
      },
      type: 'stop',
    },
  ];

  constructor() {
    effect(() => {
      this.selectedImage();
      this.resetZoom();
    });

    effect((onCleanup) => {
      if (this.playerOn()) {
        const interval = setInterval(() => {
          if (this.currentIndex() === this.images.length - 1) {
            this.selectedImage.set(this.images[0]);
          } else {
            this.selectedImage.set(this.getNextImage());
          }
        }, 2000);

        onCleanup(() => {
          clearInterval(interval);
          this.playerOn.set(false);
        });
      }
    });
  }

  showSelectedImage(image: Image) {
    this.selectedImage.set(image);
  }

  getPreviousImage() {
    if (this.currentIndex() === 0) {
      throw new Error('Action not allowed');
    }

    return this.images[this.currentIndex() - 1];
  }

  getNextImage() {
    if (this.currentIndex() === this.images.length - 1) {
      throw new Error('Action not allowed');
    }

    return this.images[this.currentIndex() + 1];
  }

  resetZoom() {
    this.zoomIn = false;
    this.zoomOut = false;
  }
}
