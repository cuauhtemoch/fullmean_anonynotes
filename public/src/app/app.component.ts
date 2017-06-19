import { Component } from '@angular/core';
import { Note } from './note'
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = new Note()
  constructor(private _http: HttpService){

  }

  onSubmit(note){
    console.log("inside app component", note)
    this._http.create(note)
    .then ( obj => {console.log(obj)})
    .catch ( err => {console.log(err)})
    return false
  }

}
