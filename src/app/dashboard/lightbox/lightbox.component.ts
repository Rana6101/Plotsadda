import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-lightbox',
  
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent {
  @Input() images: string[] = [];
  @Input() open = false;
  @Input() initialIndex = 0;

  index = 0;
  constructor(){
    console.log('lightroom',this.images)
  }
  ngOnChanges() {
    this.index = this.initialIndex || 0;
    console.log(this.images)
    console.log(this.images[this.index])
  }

  close() {
    this.open = false;
  }

  prev() {
    if (!this.images.length) return;
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  next() {
    if (!this.images.length) return;
    this.index = (this.index + 1) % this.images.length;
  }
}

