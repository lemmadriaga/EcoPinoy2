import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quiz4Page } from './quiz4.page';

describe('Quiz4Page', () => {
  let component: Quiz4Page;
  let fixture: ComponentFixture<Quiz4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
