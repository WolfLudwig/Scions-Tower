import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScionSearchComponent } from './scion-search.component';

describe('ScionSearchComponent', () => {
  let component: ScionSearchComponent;
  let fixture: ComponentFixture<ScionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
