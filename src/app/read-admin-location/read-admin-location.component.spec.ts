import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAdminLocationComponent } from './read-admin-location.component';

describe('ReadAdminLocationComponent', () => {
  let component: ReadAdminLocationComponent;
  let fixture: ComponentFixture<ReadAdminLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAdminLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAdminLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
