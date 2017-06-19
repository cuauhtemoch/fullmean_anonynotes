import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
    
    this._http.retrieve()
    .then(note => {
      console.log('success', note)
      this.notes = note.reverse();
    })
    .catch(err => {
      console.log('in the catch', err)
    })
  }

}
/*
{{note.note}} Noted on: {{note.createdAt | date: 'medium'}}
*/