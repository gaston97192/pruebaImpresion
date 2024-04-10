import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment  from 'moment';

@Component({
  selector: 'app-form-impresion',
  templateUrl: './form-impresion.component.html',
  styleUrl: './form-impresion.component.css'
})
export class FormImpresionComponent implements OnInit {
  miFormulario!: FormGroup;
  esDeshabilitado: boolean = true; 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      fecha: [{value: moment().format('DD/MM/YYYY'), disabled: true}, Validators.required],
      numero: [{value: new Date().getTime(), disabled: true}, Validators.required],
      recibidoDe: ['', Validators.required],
      concepto: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.miFormulario.valid) {
        window.print()

    } else {
      console.log('El formulario no es válido');
    }
  }
}
