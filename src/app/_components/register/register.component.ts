import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  returnUrl!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _auth: AuthenticationService
  ) { }

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
    this.router.navigate(['/home']);
  }
}
