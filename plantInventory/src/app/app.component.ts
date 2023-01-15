import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from './plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'My plant Inventory';
  public newPlantName?: string;
  public newPlantType?: string;
  public textoPrueba:string;
  public plants: Plant[] 
  = [];
  public borrar(plant: Plant): void {
    this.plants = this.plants.filter(arrayDeplants => arrayDeplants !== plant);
  }
  

  public cambiarEstado(fave: boolean, plant: Plant): void {
    this.plants.find(plantaDelArray => plantaDelArray === plant).fave = fave;


  }

}
