import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EasyStateService } from './easy-state.service';

@Component({
  selector: 'kno-easy [label]',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent {

  @Input() label!: string

  @Output() clickPremi = new EventEmitter()
  @Output() clickContent = new EventEmitter<string>()

  constructor(public readonly easyStateService: EasyStateService) {

  }

  onPremiClick() {
    this.clickPremi.emit()
  }

  onPremiContentClick() {
    this.clickContent.emit(this.label)
  }

}

