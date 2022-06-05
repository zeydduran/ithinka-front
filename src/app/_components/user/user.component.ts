import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users?: User[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _user: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers() {
    this.users = await this._user.allUser();
  }
  async delete(id:any) {
    const user = await this._user.delete(Number(id));

    this.router.navigate(['/user']);
  }
}
