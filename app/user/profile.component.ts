import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { TOASTR_TOKEN, Toastr } from '../events/common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em{float:right;color:#E05C65;padding-left:10px;}
    .error input{background-color:#E3C3C5}
    .error ::-webkit-input-placeholder{color:#999}
    .error ::-moz-placeholder{color:#999}
    .error ::-moz-placeholder{color:#999}
    .error ::-ms-input-placeholder{color:#999}
  `]
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  profileForm: FormGroup
  firstName: FormControl
  lastName: FormControl
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    this.route.navigate(['/events']);
  }

  saveProfile(saveProfile) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(saveProfile.firstName, saveProfile.lastName);
      this.route.navigate(['/events']);
      this.toastr.success('Profile Saved');
    }
  }

  validateLastName() {
    return this.lastName.valid ||
      this.lastName.untouched
  }

  validateFirstName() {
    return this.firstName.valid ||
      this.firstName.untouched
  }
}