import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasLocalService {

  private localStorageKey = 'listaTareas';

  getTareas(){
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string)||[];
  }

  agregarTareas(tarea: string) { 
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas)); 
  }

  eliminarTareas(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index,1);
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas)); 
  }
  
  editarTareas(index: number, newMesaje:string){
    const tareas = this.getTareas();
    tareas[index] = newMesaje;
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas)); 
  }

}
