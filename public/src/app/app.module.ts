import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
