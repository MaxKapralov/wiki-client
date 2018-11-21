import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatDialogModule,
  MatIconModule,
  MatInputModule, MatLineModule, MatListModule, MatMenuModule,
  MatSelectModule, MatSnackBarModule, MatTooltipModule
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
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatListModule,
    MatLineModule
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
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatLineModule
  ]
})
export class AppMaterialModule { }
