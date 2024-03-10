import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formularioContacto: FormGroup

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ["",[Validators.required,Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.email]]
    })
  }
  
  hasError(ControlName: string, errorType: string){
    return this.formularioContacto.get(ControlName)?.hasError(errorType) && this.formularioContacto.get(ControlName)?.touched
  }
  
  enviar(){
    console.log(this.formularioContacto)
  }

}
