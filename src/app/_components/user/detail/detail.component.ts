import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  updateForm!: FormGroup;
  user?: User;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _user: UserService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.getUser(Number(routeParams.get('id')))
    this.createForm();
  }
  get f() {
    return this.updateForm.value;
  }
  createForm() {
    this.updateForm = this.fb.group({
      name: this.user?.name,
      email: this.user?.name,
      password: '',
      passwordConfirm: '',
    })
  }

  async submit() {
    const { email, password, name } = this.f;
    const routeParams = this.route.snapshot.paramMap;

    const user = await this._user.update(Number(routeParams.get('id')), email, password, name);
    this.router.navigate(['/user']);
  }

  async getUser(id: number) {
    this.user = await this._user.getUser(id);

  }

}
