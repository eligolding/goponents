import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-button',
  templateUrl: './go-button.component.html'
})
export class GoButtonComponent {
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string;
  @Input() isProcessing: boolean;
  @Input() useDarkTheme: boolean;

  @Output() handleClick = new EventEmitter<boolean>();

  constructor() {}

  public clicked(): void {
    this.handleClick.emit(this.isProcessing);
  }

  public classObject(): object {
    // 'alert' as a variant is depreciated and
    // will be removed in a later version
    let isNegative: boolean = [
      'alert',
      'negative'
    ].includes(this.buttonVariant);

    return {
      'go-button--dark': this.useDarkTheme,
      'go-button--loading': this.isProcessing,
      'go-button--negative': isNegative,
      'go-button--neutral': (this.buttonVariant === 'neutral'),
      'go-button--positive': (this.buttonVariant === 'positive')
    };
  }
}
