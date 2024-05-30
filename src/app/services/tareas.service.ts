import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = "listaTareas";


  //1. Me traigo las tareas
  getTareas():string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  //2. Agregar tareas
  agregarTarea(tarea:string){
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

  elimiarTarea (index:number){
    const tareas = this.getTareas();
    tareas.splice(index,1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }
}
