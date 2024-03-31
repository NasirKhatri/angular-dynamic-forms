import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RootObject } from 'src/interfaces/interfaces';
import { IFormControl, IValidator } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  constructor(
    private _fb: FormBuilder
  ) {}

  @Input('form') form!: RootObject;
  formGroup: FormGroup = this._fb.group({});

  ngOnInit(): void {
    if(this.form && this.form.formControls) {
      let tempFormGroup: any = {};
      this.form.formControls.forEach((formControl: IFormControl) => {
        let validators: any = [];
        formControl.validators.forEach((validator: IValidator) => {
          if(validator.validatorName === 'required') validators.push(Validators.required);
          if(validator.validatorName === 'email') validators.push(Validators.email);
          if(validator.validatorName === 'minlength') validators.push(Validators.minLength(validator.minLength as number));
          if(validator.validatorName === 'maxlength') validators.push(Validators.maxLength(validator.maxLength as number));
        })
        tempFormGroup[formControl.name] = [formControl.value, validators]
      })
      this.formGroup = this._fb.group(tempFormGroup);
    }
  }
}
