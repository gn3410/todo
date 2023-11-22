import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NoteComponent } from '../note.component';
import { HttpClient } from '@angular/common/http';
import { NoteClass } from 'src/app/Model/NoteModel';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private http: HttpClient, private parent: NoteComponent) {}
  @Input() NoteList = new Input();
  @Output() NoteListEmit = new EventEmitter();
  /**
   * 使用get方法配合Array型別之Model，取得API回傳之Model Array
   * 且將結果賦予全域變數，HTML可以利用此變數進行後續處理
   *  */
  getAll_btnClick() {
    const url = 'http://localhost:60063/api/Notes';
    this.http.get<Array<NoteClass>>(url).subscribe((resp) => {
      console.log('%c Line:21 🍐', 'color:#465975', resp);
      this.NoteListEmit.emit(resp);
    });
  }
}
