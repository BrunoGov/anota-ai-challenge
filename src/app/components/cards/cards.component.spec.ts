import { TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent],
    }).compileComponents();
  });

  it('should validate the label', () => {
    const component = TestBed.createComponent(CardsComponent);
    const app = component.componentInstance;
    const resultFunction = app.validationLabelType();
    expect(resultFunction).toEqual('labelTypesOne');
  });

  it('should validate the label text', () => {
    const component = TestBed.createComponent(CardsComponent);
    const app = component.componentInstance;
    const resultFunction = app.validationTextLabelType();
    expect(resultFunction).toEqual('Outro');
  });
});
