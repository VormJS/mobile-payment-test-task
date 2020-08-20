import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OperatorFormComponent } from './operator-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OPERATORS } from 'src/app/helpers/operators';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

describe('OperatorFormComponent', () => {
  let component: OperatorFormComponent;
  let fixture: ComponentFixture<OperatorFormComponent>;
  const operatorIdExample = 'MTS'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorFormComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgxMaskModule.forRoot()
      ],
      providers: [{
        provide: ActivatedRoute, useValue: {
          snapshot: { paramMap: { get(id: string): string { return operatorIdExample } } }
        }
      }, {
        provide: OPERATORS, useValue: OPERATORS
      }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have operator title', () => {
    expect(fixture.debugElement.query(By.css('.mat-card-title')).nativeElement.textContent).toContain(operatorIdExample);
  });
  it('should have phone validation and mask', () => {
    const phoneField = component.operatorForm.controls['phone']
    expect(phoneField.valid).toBeFalsy();
    expect(phoneField.errors['required']).toBeTruthy();
    phoneField.setValue('aaa')
    expect(phoneField.valid).toBeFalsy();
    expect(phoneField.errors['mask']).toBeTruthy();
    phoneField.setValue('0000000000')
    expect(phoneField.valid).toBeTruthy();
    phoneField.setValue('000000000')
    expect(phoneField.valid).toBeFalsy();
    expect(phoneField.errors['mask']).toBeTruthy();
    phoneField.setValue('000)0000000')
    expect(phoneField.valid).toBeTruthy();
    phoneField.setValue('(000) 000-00-00')
    expect(phoneField.valid).toBeTruthy();
  });
  it('should have sum validation', () => {
    const sumField = component.operatorForm.controls['sum']
    expect(sumField.valid).toBeFalsy();
    expect(sumField.errors['required']).toBeTruthy();
    sumField.setValue(0)
    expect(sumField.valid).toBeFalsy();
    expect(sumField.errors['min']).toBeTruthy();
    sumField.setValue(1001)
    expect(sumField.valid).toBeFalsy();
    expect(sumField.errors['max']).toBeTruthy();
    sumField.setValue('666')
    expect(sumField.valid).toBeTruthy();
  });
  it('should have responsive submit button', () => {
    const submitButton = fixture.debugElement.query(By.css('.form-button'))
    expect(submitButton.nativeElement.disabled).toBe(true);
    component.operatorForm.controls['sum'].setValue(50)
    component.operatorForm.controls['phone'].setValue('(000) 000-00-00')
    fixture.detectChanges();
    expect(submitButton.nativeElement.disabled).toBe(false);
    component.operatorForm.controls['sum'].setValue(null)
    fixture.detectChanges();
    expect(submitButton.nativeElement.disabled).toBe(true);
  });
  it('should run pay() on click button', fakeAsync( () => {
    spyOn(component, 'pay')
    const submitButton = fixture.debugElement.query(By.css('.form-button')).nativeElement
    component.operatorForm.controls['sum'].setValue(50)
    component.operatorForm.controls['phone'].setValue('(000) 000-00-00')
    fixture.detectChanges();
    submitButton.click();
    tick()
    fixture.detectChanges();
    expect(component.pay).toHaveBeenCalled();
  }));
});
