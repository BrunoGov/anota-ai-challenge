import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  constructor() {}
  @Input('index') index!: string;
  @Input('title') title!: string;
  @Input('image') image!: string;
  @Input('description') description!: string;
  @Input('type') type!: string;

  @Output() removeProduct = new EventEmitter<string>();

  validationLabelType() {
    switch (this.type) {
      case '1':
        return 'labelTypesOne';
      case '2':
        return 'labelTypesTwo';
      case '3':
        return 'labelTypesThree';
      default:
        return 'labelTypesOne';
    }
  }

  validationTextLabelType() {
    switch (this.type) {
      case '1':
        return 'Paisagem';
      case '2':
        return 'Flor';
      case '3':
        return 'Pizza';
      default:
        return 'Outro';
    }
  }

  removeCard(id: string) {
    this.removeProduct.emit(id);
  }
}
