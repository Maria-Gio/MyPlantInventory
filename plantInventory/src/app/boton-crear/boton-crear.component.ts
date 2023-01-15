import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-crear',
  templateUrl: './boton-crear.component.html',
  styleUrls: ['./boton-crear.component.scss']
})
export class BotonCrearComponent {
  @Input() color:string='grey';
  @Input() texto:string='Lorem Ipsum';
}
