import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserauthpageComponent } from './userauthpage.component';

describe('UserauthpageComponent', () => {
  let component: UserauthpageComponent;
  let fixture: ComponentFixture<UserauthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserauthpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserauthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
