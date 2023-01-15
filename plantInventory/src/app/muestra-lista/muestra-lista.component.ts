import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'muestra-lista',
  templateUrl: './muestra-lista.component.html',
  styleUrls: ['./muestra-lista.component.scss']
})
export class MuestraListaComponent {
  @Input() plant: Plant;
  @Output() eventoBorrar: EventEmitter<void> = new EventEmitter();
  @Output() eventoCompletar: EventEmitter<boolean> = new EventEmitter();

  public borrar(): void {
    this.eventoBorrar.emit();
  }
  public cambiarEstado(): void {
    this.eventoCompletar.emit(!this.plant.fave);

  }
}
