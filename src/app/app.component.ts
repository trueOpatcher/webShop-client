import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webShop-client';

  constructor(private authoService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.authoService.autoLogin().subscribe(() => {
      this.router.navigate(['/shop']);
    });
  }

}
