import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {
  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() type: string = 'text'; // Default type is 'text'
  @Input() id!: string;

  get control() {
    return this.form.get(this.controlName);
  }
}

