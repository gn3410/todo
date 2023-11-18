import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  constructor(private http: HttpClient) {}
  APIresult = '';
  form: FormGroup = new FormGroup({
    userName: new FormControl(),
    tel: new FormControl(),
    pwd: new FormControl(),
  });
  ngOnInit(): void {}

  getAll_btnClick() {
    console.log('%c Line:16 🍢', 'color:#4fff4B');
    const url = 'http://localhost:60063/api/Notes';
    this.http.get<any>(url).subscribe((resp) => {
      console.log('%c Line:21 🍐', 'color:#465975', resp);
      this.APIresult = JSON.stringify(resp);
    });
  }
  getSingle_btnClick() {
    console.log('%c Line:26 🍷', 'color:#f5ce50');
    const url = 'http://localhost:60063/api/Notes?id=1';
    this.http.get<any>(url).subscribe((resp) => {
      console.log('%c Line:28 🥪 resp', 'color:#fca650', resp);
      this.APIresult = JSON.stringify(resp);
    });
  }
  getForm() {
    //HTML的form標籤中設定formGroup屬性
    //全域變數中宣告formGroup型別的物件form，其中包含多個想要抓取的物件formControl
    //HTML中form裡面的每個input欄位也要設定formControlName屬性，就會自動binding
    //log這個from.value時就會抓到form中每個欄位現在的value
    this.APIresult = JSON.stringify(this.form.value);
  }
}
