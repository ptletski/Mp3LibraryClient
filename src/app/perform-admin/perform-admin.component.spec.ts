import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformAdminComponent } from './perform-admin.component';

describe('PerformAdminComponent', () => {
  let component: PerformAdminComponent;
  let fixture: ComponentFixture<PerformAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
