import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeralComponent } from './card-geral.component';

describe('CardGeralComponent', () => {
  let component: CardGeralComponent;
  let fixture: ComponentFixture<CardGeralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGeralComponent]
    });
    fixture = TestBed.createComponent(CardGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
