import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearningCenterPage } from './learning-center.page';

describe('LearningCenterPage', () => {
  let component: LearningCenterPage;
  let fixture: ComponentFixture<LearningCenterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
