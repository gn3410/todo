import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteClass } from '../Model/NoteModel';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  NoteList: Array<NoteClass> = [];
  ngOnInit(): void {}

  getNoteList(event: NoteClass[]) {
    this.NoteList = event;
  }
}
