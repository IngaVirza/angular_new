import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { delay, from, map, skip, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);
  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor() {
    // from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    //   .pipe(
    //     map((val) => val * 2),
    //     //  take(2)
    //     //skip(2)
    //     delay(1000)
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
  }

  onSubmit() {
    if (this.form.value) {
      //@ts-ignore
      this.authService.login(this.form.value).subscribe((res) => {
        this.router.navigate(['']);
      });
    }
  }
}
