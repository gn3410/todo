import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = '第二次測試修改todo';
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
