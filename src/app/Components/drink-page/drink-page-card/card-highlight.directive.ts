import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[knoCardHighlight]'
})
export class CardHighlightDirective {
  private readonly defaultBackgroundColor = '#393E46'
  private readonly hoverBackgroundColor = 'purple'

  @HostBinding('style.background') backgroundColor = this.defaultBackgroundColor

  @HostListener('mouseenter') x() {
    this.backgroundColor = this.hoverBackgroundColor
  }
  @HostListener('mouseleave') y() {
    this.backgroundColor = this.defaultBackgroundColor
  }

}
