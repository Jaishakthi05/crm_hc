import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltrackComponent } from './calltrack.component';

describe('CalltrackComponent', () => {
  let component: CalltrackComponent;
  let fixture: ComponentFixture<CalltrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalltrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalltrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
