import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregarComponent } from './carregar.component';

describe('CarregarComponent', () => {
  let component: CarregarComponent;
  let fixture: ComponentFixture<CarregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarregarComponent]
    });
    fixture = TestBed.createComponent(CarregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
