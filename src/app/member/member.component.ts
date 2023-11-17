import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  constructor(private http: HttpClient) { }
  APIresult = '';
  ngOnInit(): void {

  }

  getAll_btnClick() {
    console.log("%c Line:16 🍢", "color:#4fff4B");
    const url = 'http://localhost:60063/api/Users'
    this.http.get<any>(url).subscribe(resp => {
      console.log("%c Line:21 🍐", "color:#465975", resp);
      this.APIresult = JSON.stringify(resp)
    })
  }
  getSingle_btnClick() {
    console.log("%c Line:26 🍷", "color:#f5ce50");
    const url = 'http://localhost:60063/api/Users?id=1'
    this.http.get<any>(url).subscribe(resp => {
      console.log("%c Line:28 🥪 resp", "color:#fca650", resp);
      this.APIresult = JSON.stringify(resp)
    })
  }
}
