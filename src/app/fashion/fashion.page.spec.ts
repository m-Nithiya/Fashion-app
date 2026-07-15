import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionPage } from './fashion.page';

describe('FashionPage', () => {
  let component: FashionPage;
  let fixture: ComponentFixture<FashionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
