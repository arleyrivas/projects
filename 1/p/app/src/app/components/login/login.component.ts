import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormGroup({});

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }

  public submit(): void {
    const params: HttpParams = new HttpParams({
      fromObject: {
        j_u: this.loginFormGroup.controls["username"].value,
        j_p: this.loginFormGroup.controls["password"].value
      }
    });

    const headers = new HttpHeaders().set(
      'Content-Type',
     'application/x-www-form-urlencoded;'
    );

    this.httpClient.get<string>("http://172.20.115.30:8446/portal/getjsessionid").subscribe({
      next: (jsessionid: string) => {
        console.info(jsessionid);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
