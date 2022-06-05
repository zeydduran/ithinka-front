import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  registerForm!: FormGroup;
  returnUrl!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _auth: AuthenticationService
  ) { }
  user = new User()
  ngOnInit(): void {
    this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.registerForm.value;
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['Zeyd Duran', [Validators.required]],
      email: ['zeyd@medyax.com', [Validators.required]],
      password: ['123456', [Validators.required]],
      passwordConfirm: ['123456', [Validators.required]]
    })
  }

  async submit() {
    const { email, password, name } = this.f;
    const user = await this._auth.register(email, password, name).toPromise();
    this.router.navigate(['/user']);
  }

}
