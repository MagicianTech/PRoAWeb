import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicsComponent } from './tics.component';

describe('TicsComponent', () => {
  let component: TicsComponent;
  let fixture: ComponentFixture<TicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
