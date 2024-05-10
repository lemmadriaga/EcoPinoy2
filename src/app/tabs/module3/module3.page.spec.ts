import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module3Page } from './module3.page';

describe('Module3Page', () => {
  let component: Module3Page;
  let fixture: ComponentFixture<Module3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
