import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NOTES } from 'src/app/util/notes';

@Component({
  selector: 'app-notesapp',
  templateUrl: './notesapp.component.html',
  styleUrls: ['./notesapp.component.scss']
})
export class NotesappComponent implements OnInit {

  notesArray: NOTES[];
  notesForm:FormGroup;
  indexcount:number=0;
  readonly:boolean;
  constructor(private fb: FormBuilder) {
    this.notesArray = [];
    this.readonly = true;
    this.notesForm = this.fb.group({
    })
   }

  ngOnInit() {
    if(!(localStorage.getItem('0'))){
      let noteObj:NOTES = {
        content:`Hello, World!
  
        This is your first Angular Markdown note. You can:
        
        Click to edit
        
        Click off/Blur to save
        
        Add a new note  by clicking the plus sign above.
        
        Delete this note
        
        Markdown compiled using the fantastic angular-markdown-editable directive.`,
        id:this.indexcount.toString(),
        date:new Date().toDateString()
      }
      this.notesForm.addControl(noteObj.id,new FormControl(noteObj.content));
      this.notesArray.push(noteObj);
      this.setLocalStorage(noteObj);
    }
    else{
      this.loadNotes();
    }
  }

  addTextArea(){
    this.readonly = false;
    this.indexcount++;
    this.notesForm.addControl(this.indexcount.toString(),new FormControl(''));
    let noteObj:NOTES = {
      content:``,
      id:this.indexcount.toString(),
      date:new Date().toDateString()
    }
    this.notesArray.push(noteObj);
  }
  saveNote(obj: NOTES,content: string){
    this.readonly = true;
    console.log(obj,this.notesForm.value,content);
    let modifiedObj = Object.assign({},obj);
    modifiedObj.content = content;
    this.setLocalStorage(modifiedObj);
  }
  editNote(noteId: string){
    //enable editing
    this.readonly = false;
  }
  deleteNote(noteId: string){
    //delete entry from localstorage
    localStorage.removeItem(noteId);
    //render notes
    this.loadNotes();
  }
  private loadNotes(){
    let notes = Array.from(localStorage);
    notes = notes.map((note) => {
      let jsonObj =  JSON.parse(note);
      this.notesForm.addControl(jsonObj.id,new FormControl(jsonObj.content));
      return jsonObj;
    });
    this.notesArray = notes;
    this.indexcount = +this.notesArray[notes.length-1].id;
  }
  private setLocalStorage(noteObj: NOTES) {
    localStorage.setItem(noteObj.id, JSON.stringify(noteObj));
  }
  trackById(index, item) {
    return index;
  }
}


