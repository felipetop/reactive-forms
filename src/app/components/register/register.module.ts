import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../form-field/form-field.module';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
