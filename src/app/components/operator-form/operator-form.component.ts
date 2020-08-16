import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operator-form',
  templateUrl: './operator-form.component.html',
  styleUrls: ['./operator-form.component.scss']
})
export class OperatorFormComponent implements OnInit {
  operatorTitle: string

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.operatorTitle = this.route.snapshot.paramMap.get("id")
  }
}
