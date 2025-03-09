import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMagicianTechComponent } from './by-magician-tech.component';

describe('ByMagicianTechComponent', () => {
  let component: ByMagicianTechComponent;
  let fixture: ComponentFixture<ByMagicianTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByMagicianTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByMagicianTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
