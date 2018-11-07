import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  form: FormGroup;
  title: string;
  label: string;
  inputType: string;
  constructor(private builder: FormBuilder, private dialogRef: MatDialogRef<ParameterComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.form = builder.group({
      input: [null]
      }
    );
    this.title = data.title;
    this.inputType = data.inputType;
    this.label = data.label;
  }

  ngOnInit() {
  }

  apply() {
    this.dialogRef.close(this.form.controls['input'].value);
  }
}
