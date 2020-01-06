import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'go-pill',
  templateUrl: './go-pill.component.html',
  styleUrls: ['./go-pill.component.scss'],
})
export class GoPillComponent {
  @Input() removable: boolean = true;
  @Output() removed: EventEmitter<void> = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.removed.emit();
  }
}