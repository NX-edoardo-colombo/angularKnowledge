import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kno-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {

}
