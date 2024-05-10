import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module4Page } from './module4.page';

describe('Module4Page', () => {
  let component: Module4Page;
  let fixture: ComponentFixture<Module4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Module4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
