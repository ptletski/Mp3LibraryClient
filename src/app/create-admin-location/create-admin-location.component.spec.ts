import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminLocationComponent } from './create-admin-location.component';

describe('CreateAdminLocationComponent', () => {
  let component: CreateAdminLocationComponent;
  let fixture: ComponentFixture<CreateAdminLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdminLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
