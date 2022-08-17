import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-handler',
  templateUrl: './drag-handler.component.html',
  styleUrls: ['./drag-handler.component.css'],
})
export class DragHandlerComponent {
  @Input() text?: string;
}
