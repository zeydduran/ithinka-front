import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User } from '@app/_models';
import { Group } from '@app/_models/Group';
import { AuthenticationService } from '@app/_services';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user?: User;
  role?: {};
  constructor(
    private router: Router,
    private _auth: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.user = this._auth.userValue;



  }
  logout() {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
