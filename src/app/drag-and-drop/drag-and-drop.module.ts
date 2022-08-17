import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragHandlerComponent } from './drag-handler/test-dragtile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DragHandlerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
})
export class DragAndDropModule {}
