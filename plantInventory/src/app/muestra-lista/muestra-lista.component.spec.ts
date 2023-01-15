import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraListaComponent } from './muestra-lista.component';

describe('MuestraListaComponent', () => {
  let component: MuestraListaComponent;
  let fixture: ComponentFixture<MuestraListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
