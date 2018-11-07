import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-parameter',
  templateUrl: './select-parameter.component.html',
  styleUrls: ['./select-parameter.component.css']
})
export class SelectParameterComponent implements OnInit {

  form: FormGroup;
  items: string[];
  title: string;
  label: string;
  constructor(private builder: FormBuilder, private dialogRef: MatDialogRef<SelectParameterComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.form = builder.group({
      input: [null]
    });
    this.items = data.items;
    this.title = data.title;
    this.label = data.label;
  }

  ngOnInit() {
  }
  apply() {
    this.dialogRef.close(this.form.controls['input'].value);
  }
}
