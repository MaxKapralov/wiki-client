import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParameterComponent } from '../parameter/parameter.component';
import { SelectParameterComponent } from '../select-parameter/select-parameter.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  form: FormGroup;
  @ViewChild('editor') editor: ElementRef;

  constructor(private dialog: MatDialog, private builder: FormBuilder) {
    this.form = builder.group({});
  }

  ngOnInit() {
    this.editor.nativeElement.contentDocument.designMode = 'On';
  }

  bold() {
    this.editor.nativeElement.contentDocument.execCommand('bold', false, null);
  }

  italic() {
    this.editor.nativeElement.contentDocument.execCommand('italic', false, null);
  }

  underline() {
    this.editor.nativeElement.contentDocument.execCommand('underline', false, null);
  }

  fontSize() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Please enter font size',
      inputType: 'number',
      label: 'Font Size'
    };
    this.dialog.open(ParameterComponent, dialogConfig).afterClosed()
      .subscribe(size => {
        this.editor.nativeElement.contentDocument.execCommand('FontSize', false, size);
      });
  }

  link() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Please enter a link',
      inputType: 'text',
      label: 'Link'
    };
    this.dialog.open(ParameterComponent, dialogConfig).afterClosed()
      .subscribe(link => {
        this.editor.nativeElement.contentDocument.execCommand('CreateLink', false, link);
      });
  }

  fontFamily() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Please choose font family:',
      label: 'Font Family',
      items: ['Times New Roman', 'Arial', 'Georgia', 'Comic Sans MS']
    };
    this.dialog.open(SelectParameterComponent, dialogConfig).afterClosed()
      .subscribe(fontFamily => {
        this.editor.nativeElement.contentDocument.execCommand('FontName', false, fontFamily);
      });
  }

  foreColor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Please choose font color::',
      label: 'Font Color',
      items: ['Black', 'Red', 'Blue', 'Green']
    };
    this.dialog.open(SelectParameterComponent, dialogConfig).afterClosed()
      .subscribe(color => {
        this.editor.nativeElement.contentDocument.execCommand('foreColor', false, color);
      });
  }

  borderHorizontal() {
    this.editor.nativeElement.contentDocument.execCommand('insertHorizontalRule', false, null);
  }

  orderedList() {
    this.editor.nativeElement.contentDocument.execCommand('insertOrderedList', false, null);
  }

  unorderedList() {
    this.editor.nativeElement.contentDocument.execCommand('insertUnorderedList', false, null);
  }
  get html(): string {
    return window.frames['editor'].document.body.innerHTML;
  }
  set html(value: string) {
    window.frames['editor'].document.body.innerHTML = value;
  }
}
