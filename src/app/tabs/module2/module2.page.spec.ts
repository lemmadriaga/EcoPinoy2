import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module2Page } from './module2.page';

describe('Module2Page', () => {
  let component: Module2Page;
  let fixture: ComponentFixture<Module2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
