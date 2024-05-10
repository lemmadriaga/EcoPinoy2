import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quiz5Page } from './quiz5.page';

describe('Quiz5Page', () => {
  let component: Quiz5Page;
  let fixture: ComponentFixture<Quiz5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
