import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../password-validator';
import { NewUser } from '../../model/new-user';
import { NewUserProxyService } from '../../service/proxy/new-user-proxy.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  hidePass = true;
  hideConf = true;
  constructor(private builder: FormBuilder, private newUserProxyService: NewUserProxyService) {
    this.registrationForm = builder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      passwordConfirmation: [null, Validators.required]
    }, {validator: PasswordValidator.matchPassword});
  }

  ngOnInit() {
  }

  reset() {
    this.registrationForm.reset();
  }
  register() {
    const newUser: NewUser = {
      name: this.registrationForm.controls['name'].value,
      surname: this.registrationForm.controls['surname'].value,
      email: this.registrationForm.controls['email'].value,
      password: this.registrationForm.controls['password'].value,
    };
    this.newUserProxyService.addEntity(newUser);
    this.reset();
  }
}
