import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoTituloComponent } from './encabezado-titulo.component';

describe('EncabezadoTituloComponent', () => {
  let component: EncabezadoTituloComponent;
  let fixture: ComponentFixture<EncabezadoTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoTituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
