import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImpresionComponent } from './form-impresion.component';

describe('FormImpresionComponent', () => {
  let component: FormImpresionComponent;
  let fixture: ComponentFixture<FormImpresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormImpresionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
