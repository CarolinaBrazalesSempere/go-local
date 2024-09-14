import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/go-local/services/auth.service';


@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
