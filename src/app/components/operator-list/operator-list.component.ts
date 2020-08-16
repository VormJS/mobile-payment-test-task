import { Component, OnInit } from '@angular/core';
import { OPERATORS } from 'src/app/helpers/operators';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit {
  operators = OPERATORS
  constructor() { }

  ngOnInit(): void { }

}
