import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dnd-reordering',
  templateUrl: './dnd-reordering.component.html',
  styleUrls: ['./dnd-reordering.component.css'],
})
export class DndReorderingComponent {
  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  dragEntered(event: CdkDragEnter<number>) {
    const drag = event.item;
    const dropContainer = event.container;

    const dragIndex = drag.data;
    const dropIndex = dropContainer.data;
    this.dragDropInfo = { dragIndex, dropIndex };

    const dropContainerElement = dropContainer.element.nativeElement;
    const phElement = dropContainerElement.querySelector(
      '.cdk-drag-placeholder'
    );

    if (phElement) {
      dropContainerElement.removeChild(phElement);
      dropContainerElement.parentElement?.insertBefore(
        phElement,
        dropContainerElement
      );

      moveItemInArray(this.items, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    if (!this.dropListContainer || !this.dragDropInfo) return;

    const placeholderElement =
      this.dropListContainer.nativeElement.querySelector(
        '.cdk-drag-placeholder'
      );

    const receiverElement =
      this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
        ? placeholderElement?.nextElementSibling
        : placeholderElement?.previousElementSibling;

    if (!receiverElement) {
      return;
    }

    receiverElement.style.display = 'none';
    this.dropListReceiverElement = receiverElement;
  }

  dragDropped(event: CdkDragDrop<number>) {
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;
  }
}
