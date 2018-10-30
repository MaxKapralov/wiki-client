import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    AutosizeModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    AutosizeModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class AppMaterialModule { }
