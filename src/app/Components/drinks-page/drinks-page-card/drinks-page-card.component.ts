import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { of, switchMap, tap, pipe, delay, Subject, Subscription, Observable } from 'rxjs';
import { DrinkService } from 'src/app/Services/drink.service';
import { DrinksCardDto } from 'src/app/Infrastructure/DTOs/drink-card.dto';
import { Drink } from 'src/app/Models/drink.model';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

export type cardStatus = 'default' | 'info'

@Component({
  selector: 'kno-drinks-page-card [id] [name] [imgSrc]',
  templateUrl: './drinks-page-card.component.html',
  styleUrls: ['./drinks-page-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinksPageCardComponent /* implements OnInit */ implements OnChanges {

  @Input() id!: string
  @Input() name!: string
  @Input() imgSrc!: string

  @Input() shouldShowInfo: boolean = false;
  @Input() info!: Drink | null | undefined
  @Input() status: cardStatus = 'default'

  @Output() changeStatus = new EventEmitter<cardStatus>();
  @Output() viewAllClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  onInfoClicked() {
    this.status = 'info'
    this.changeStatus.emit(this.status)
  }

  onBackClicked() {
    this.status = 'default'
    this.changeStatus.emit(this.status)
  }

  onViewAllClicked() {
    if (this.id) {
      this.viewAllClicked.emit(this.id)
    }
  }

}
