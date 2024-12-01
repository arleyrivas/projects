import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-second-password-main',
  templateUrl: './administration-second-password-main.component.html',
  styleUrls: ['./administration-second-password-main.component.css']
})
export class AdministrationSecondPasswordMainComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/', 'administracion', 'second-password']);
  }
}
