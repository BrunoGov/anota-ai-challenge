import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const component = TestBed.createComponent(HeaderComponent);
    const app = component.componentInstance;
    expect(app).toBeTruthy();
  });

  it('must contain the correct title', () => {
    const component = TestBed.createComponent(HeaderComponent);
    const app = component.componentInstance;
    expect(app.title).toEqual('Teste de desenvolvedor Front-End - Anota AI');
  });

  it('must contain the correct subtitle', () => {
    const component = TestBed.createComponent(HeaderComponent);
    const app = component.componentInstance;
    expect(app.personalName).toEqual('João Silva da Silva');
  });
});
