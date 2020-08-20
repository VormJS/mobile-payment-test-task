import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorListComponent } from './operator-list.component';
import { MaterialModule } from 'src/app/material.module';
import { By } from '@angular/platform-browser';
import { OPERATORS } from 'src/app/helpers/operators';
import { RouterTestingModule } from '@angular/router/testing';

describe('OperatorListComponent', () => {
  let component: OperatorListComponent;
  let fixture: ComponentFixture<OperatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorListComponent],
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      providers:[{
        provide: OPERATORS, useValue: OPERATORS
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have container for operator cards', () => {
    expect(fixture.debugElement.query(By.css('.operator-container'))).toBeTruthy();
  });
  it('should have cards of operators', () => {
    expect(fixture.debugElement.queryAll(By.css('.operator-card')).length).toEqual(OPERATORS.length);
    expect(fixture.debugElement.queryAll(By.css('.operator-card'))[0].nativeElement.textContent).toEqual(OPERATORS[0].title);
  });
});
