import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsComponent } from './achievements.component';

describe('ProjectsComponent', () => {
  let component: AchievementsComponent;
  let fixture: ComponentFixture<AchievementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementsComponent],
    });
    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
