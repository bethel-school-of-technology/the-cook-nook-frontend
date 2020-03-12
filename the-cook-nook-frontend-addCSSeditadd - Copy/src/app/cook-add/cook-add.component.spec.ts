import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookAddComponent } from './cook-add.component';

describe('CookAddComponent', () => {
  let component: CookAddComponent;
  let fixture: ComponentFixture<CookAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
