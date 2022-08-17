import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragHandlerComponent } from './drag-and-drop/drag-handler/drag-handler.component';

@NgModule({
  declarations: [AppComponent, DragAndDropComponent, DragHandlerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [DragDropModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
