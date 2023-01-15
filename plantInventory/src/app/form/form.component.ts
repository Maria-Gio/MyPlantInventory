import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() plants: Plant[];
  public newPlantType: string;
  public newPlantName: string;

  public sortPlants(plants: Plant[]) {
    plants.sort((a, b) => {
      if (b.name < a.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    })
  }
  public addPlant(): void {

    if (!this.newPlantName || !this.newPlantType) {
      return;
    }
    this.newPlantName = this.newPlantName.toLocaleLowerCase();
    this.newPlantType = this.newPlantType.toLocaleLowerCase();

    this.plants.push({ name: this.newPlantName, type: this.newPlantType, fave: false });
    //De donde saque el sort https://www.todojs.com/usar-correctamente-el-metodo-sort/

    //Esta función recibe dos valores a comparar y como resultado debe:
    /** 
    devolver un valor positivo (1) si e primer valor es superior al segundo
    devolver un valor negativo (-1) si e primer valor es inferior al segundo
    devolver un valor cero (0) si los dos valores son iguales o equivalentes para la ordenación.*/
    //La función (a, b) => a – b utiliza un pequeño truco y al restar un valor a otro consigue que se devuelva un valor positivo si a es mayor que b, un valor negativo si a es menor que b, y 0 si tienen el mismo valor, por lo que se cumple el requisito que nos imponen a la hora de retornar valores en la función de apoyo al método .sort().
    this.plants.sort((PlantaA, PlantaB) => {
      if (PlantaB.name < PlantaA.name) {
        return 1
      };
      if (PlantaB.name > PlantaA.name) {
        return -1
      };
      return 0;
    })
    this.newPlantName = '';
    this.newPlantType = null;
  }
  public reset(): void {
    this.newPlantName = '';
    this.newPlantType = null;
  }
}
