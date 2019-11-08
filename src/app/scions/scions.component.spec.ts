import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScionsComponent } from './scions.component';

describe('ScionsComponent', () => {
  let component: ScionsComponent;
  let fixture: ComponentFixture<ScionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
