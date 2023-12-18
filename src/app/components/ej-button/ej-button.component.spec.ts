import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjButtonComponent } from './ej-button.component';

describe('EjButtonComponent', () => {
  let component: EjButtonComponent;
  let fixture: ComponentFixture<EjButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjButtonComponent]
    });
    fixture = TestBed.createComponent(EjButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
