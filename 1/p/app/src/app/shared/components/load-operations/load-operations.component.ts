import { Component, Input, OnInit } from '@angular/core';
import { privileges } from "../../../core/privileges.enum";

@Component({
  selector: 'app-load-operations',
  templateUrl: './load-operations.component.html',
  styleUrls: ['./load-operations.component.css']
})
export class LoadOperationsComponent implements OnInit{

  @Input() public data: Array<any> = [];
  public privileges: typeof privileges = privileges;

  constructor() { }

  ngOnInit(): void {
  }
}
