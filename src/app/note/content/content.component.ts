import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NoteComponent } from '../note.component';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteClass } from 'src/app/Model/NoteModel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(private http: HttpClient) {}
  @Input() NoteList = new Input();
  @Output() NoteListEmit = new EventEmitter();
  //HTML的form標籤中設定formGroup屬性
  //全域變數中宣告formGroup型別的物件form，其中包含多個想要抓取的物件formControl
  //HTML中form裡面的每個input欄位也要設定formControlName屬性，就會自動binding
  //log這個from.value時就會抓到form中每個欄位現在的value
  form: FormGroup = new FormGroup({
    SearchTitle: new FormControl(),
  });
  /**
   * 使用get方法配合Model，取得API回傳之Model
   * 進入function需先將全域變數清空，防止資料不斷累加
   *  */
  getSingle_btnClick() {
    const searchText = this.form.value['SearchTitle'];
    console.log(searchText);
    this.NoteList = [];
    const url = 'http://localhost:60063/api/Notes?title=' + searchText;
    this.http.get<NoteClass>(url).subscribe((resp) => {
      console.log('%c Line:28 🥪 resp', 'color:#fca650', resp);
      this.NoteList.push(resp);
      this.NoteListEmit.emit(this.NoteList);
    });
  }
}
