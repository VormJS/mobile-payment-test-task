import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OPERATORS } from 'src/app/helpers/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-operator-form',
  templateUrl: './operator-form.component.html',
  styleUrls: ['./operator-form.component.scss']
})
export class OperatorFormComponent implements OnInit {
  operator: { title: string, logo: string }
  operatorForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    let operatorID = this.route.snapshot.paramMap.get("id")
    this.operator = OPERATORS.find(operator => operator.title === operatorID)

    this.operatorForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern(/^\+?([\d\ \-\(\)]+)$/)]],
      sum: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.operatorForm.controls[controlName].hasError(errorName);
  }
  pay() {
    if (Math.random() > 0.5) {
      this.snackBar.open(`Payment accepted`, '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      this.router.navigate(['']);
    } else {
      this.snackBar.open(`Payment denied`, '', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }
}
