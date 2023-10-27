import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { of, switchMap, tap, pipe, delay, Subject, Subscription, Observable } from 'rxjs';
import { DrinkService } from 'src/app/Services/drink.service';
import { DrinksCardDto } from 'src/app/Services/DTOs/drink-card.dto';
import { Drink } from 'src/app/Models/drink.model';
import { ChangeDetectionStrategy } from '@angular/core';

export type cardStatus = 'default' | 'info'

@Component({
  selector: 'kno-drink-page-card [id] [name] [imgSrc]',
  templateUrl: './drink-page-card.component.html',
  styleUrls: ['./drink-page-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkPageCardComponent /* implements OnInit */ implements OnChanges {

  @Input() id!: string
  @Input() name!: string
  @Input() imgSrc!: string

  @Input() shouldShowInfo: boolean = false;
  @Input() info!: Drink | null | undefined
  @Input() status: cardStatus = 'default'

  @Output() changeStatus = new EventEmitter<cardStatus>();

  constructor(private readonly drinkService: DrinkService, private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    /* if (this.info != null)
      console.log('child onchanges: ', this.info) */
  }

  onInfoClicked() {
    this.status = 'info'
    this.changeStatus.emit(this.status)
  }

  onBackClicked() {
    this.status = 'default'
    this.changeStatus.emit(this.status)
  }

}
