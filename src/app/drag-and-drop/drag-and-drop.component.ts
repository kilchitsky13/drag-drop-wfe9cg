import { Component } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropComponent {
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  drop(event: CdkDragDrop<number>): void {
    moveItemInArray(
      this.items,
      event.previousContainer.data,
      event.container.data
    );
  }
}
