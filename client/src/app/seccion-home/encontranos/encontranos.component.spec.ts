import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontranosComponent } from './encontranos.component';

describe('EncontranosComponent', () => {
  let component: EncontranosComponent;
  let fixture: ComponentFixture<EncontranosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncontranosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncontranosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
