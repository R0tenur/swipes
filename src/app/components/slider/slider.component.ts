import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  public animating = false;

  @ViewChild('sliderEl')
  private sliderEl;
  private sliderPanelSelector = '.slider-panel';
  private percentageCalculated = 0;
  private selectedIndex = 0;

  private sensitivity = 25;

  private slideCount = 0;
  private timer;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // this.sliderEl.nativeElement.style.width = `300%`;
    this.slideCount = this.sliderEl.nativeElement.querySelectorAll(this.sliderPanelSelector).length;
    this.sliderEl.nativeElement.style.width = `${this.slideCount * 100}%`;
  }
  pan(e) {
    const percentage = 100 / this.slideCount * e.deltaX / window.innerWidth;
    this.percentageCalculated = percentage - 100 / this.slideCount * this.selectedIndex;

    if (e.isFinal) {
      if (e.velocityX > 1) {
        this.goTo(this.selectedIndex - 1);
      } else if (e.velocityX < -1) {
        this.goTo(this.selectedIndex + 1);
      } else {
        if (percentage <= -(this.sensitivity / this.slideCount)) {
          this.goTo(this.selectedIndex + 1);
        } else if (percentage >= (this.sensitivity / this.slideCount)) {
          this.goTo(this.selectedIndex - 1);
        } else {
          this.goTo(this.selectedIndex);
        }
      }
    }
  }
  public getOffset() {
    return {
      'transform': 'translateX( ' + this.percentageCalculated + '%)'
    };
  }

  goTo(number) {

    if (number < 0) {
      this.selectedIndex = 0;
    } else if (number > this.slideCount - 1) {
      this.selectedIndex = this.slideCount - 1;
    } else {
      this.selectedIndex = number;
    }
    this.animating = true;
    this.percentageCalculated = -(100 / this.slideCount) * this.selectedIndex;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.animating = false;
    }, 400);

  }
}
