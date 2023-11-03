import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kno-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForbiddenPageComponent {

  constructor(private router: Router) { }
  onGoHomePage() {
    this.router.navigate(['/'])
  }

}
