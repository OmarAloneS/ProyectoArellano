import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sistema3x3Page } from './sistema3x3.page';

describe('Sistema3x3Page', () => {
  let component: Sistema3x3Page;
  let fixture: ComponentFixture<Sistema3x3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Sistema3x3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
