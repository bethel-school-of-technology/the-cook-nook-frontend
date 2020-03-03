import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookEditComponent } from './cook-edit.component';

describe('CookEditComponent', () => {
  let component: CookEditComponent;
  let fixture: ComponentFixture<CookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
