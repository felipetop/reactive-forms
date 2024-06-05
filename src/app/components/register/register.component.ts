import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareStringValidator } from 'src/app/validators/passwordMatchValidator';
import { passwordValidator } from 'src/app/validators/passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  personType = ['Física', 'Jurídica'];
  estadosCivis: string[] = ['Solteiro', 'Casado', 'Divorciado', 'Viúvo']

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tipoPessoa: ['Física', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      estadoCivil: ['Solteiro', Validators.required],
      cnpj: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^\d{14}$/)]],
      senha: ['', [Validators.required, passwordValidator()]],
      confirmarSenha: ['', Validators.required],
    }, { validators: compareStringValidator('senha', 'confirmarSenha') });
  }

  public ngOnInit(): void {
    this.onChanges();
  }

  public onSubmit(): void {
    if(this.form.valid) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Formulário inválido!');
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
  }

  onChanges(): void {
    this.form.get('tipoPessoa')?.valueChanges.subscribe(val => {
      if (val === 'Física') {
        this.form.get('cpf')?.enable();
        this.form.get('estadoCivil')?.enable();
        this.form.get('estadoCivil')?.setValue('Solteiro')
        this.form.get('cnpj')?.disable();
        this.form.get('cnpj')?.reset();
      } else if (val === 'Jurídica') {
        this.form.get('cnpj')?.enable();
        this.form.get('cpf')?.disable();
        this.form.get('cpf')?.reset();
        this.form.get('estadoCivil')?.disable();
        this.form.get('estadoCivil')?.reset();
      }
    });
  }



}
