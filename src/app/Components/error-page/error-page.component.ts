import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kno-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {

  constructor(private router: Router) { }
  onGoHomePage() {
    this.router.navigate(['/'])
  }

}
