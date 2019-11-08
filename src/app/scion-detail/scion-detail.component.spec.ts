import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScionDetailComponent } from './scion-detail.component';

describe('ScionDetailComponent', () => {
  let component: ScionDetailComponent;
  let fixture: ComponentFixture<ScionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
