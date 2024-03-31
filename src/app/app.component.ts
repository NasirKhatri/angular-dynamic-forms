import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RootObject } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: RootObject;

  constructor(
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this._http.get<RootObject>('assets/dynamicForm.json').subscribe(res => this.form = res);
  }

}
