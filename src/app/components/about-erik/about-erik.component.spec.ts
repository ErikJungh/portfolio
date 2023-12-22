import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutErikComponent } from './about-erik.component';

describe('AboutErikComponent', () => {
  let component: AboutErikComponent;
  let fixture: ComponentFixture<AboutErikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutErikComponent]
    });
    fixture = TestBed.createComponent(AboutErikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
