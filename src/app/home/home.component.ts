import { Component } from '@angular/core';
import { TareasLocalService } from '../services/tareas-local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  imageLink?: string;
  imageLinkGuardada?: string;


  
  message: string = '';
  listaTareas: string[] = [];
  modoEdicion: number = -1; // Inicialmente no estamos en modo edición

  constructor(private tareasLocalService: TareasLocalService) { }

  ngOnInit(): void {
    this.listaTareas = this.tareasLocalService.getTareas();
  }

  agregarTareas() {
    if (this.message.trim() !== '') {
      this.tareasLocalService.agregarTareas(this.message);
      this.message = '';
      this.listaTareas = this.tareasLocalService.getTareas();
    }
  }

  eliminarTarea(index: number) {
    this.tareasLocalService.eliminarTareas(index);
    this.listaTareas = this.tareasLocalService.getTareas();
  }

  editarTarea(index: number, tarea: string) {
    this.modoEdicion = index; 
    this.message = tarea; 
  }

  guardarEdicion(index: number) {
    if (this.message.trim() !== '') {
      this.tareasLocalService.editarTareas(index, this.message);
      this.message = '';
      this.listaTareas = this.tareasLocalService.getTareas();
      this.modoEdicion = -1; 
    }
  }

  

  guardarImagen(){
    this.imageLinkGuardada = this.imageLink;
    this.imageLink = "";
    console.log(this.imageLink);
    console.log(this.imageLinkGuardada);
    
    
  }



}
