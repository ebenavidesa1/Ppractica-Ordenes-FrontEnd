import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetalleOrdenComponent } from './add-detalle-orden.component';

describe('AddDetalleOrdenComponent', () => {
  let component: AddDetalleOrdenComponent;
  let fixture: ComponentFixture<AddDetalleOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetalleOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
