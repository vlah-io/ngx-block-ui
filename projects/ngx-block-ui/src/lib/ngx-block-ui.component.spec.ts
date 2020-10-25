import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBlockUiComponent } from './ngx-block-ui.component';

describe('NgxBlockUiComponent', () => {
  let component: NgxBlockUiComponent;
  let fixture: ComponentFixture<NgxBlockUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBlockUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBlockUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
