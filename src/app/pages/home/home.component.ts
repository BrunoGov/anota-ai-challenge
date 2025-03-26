import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { ProductsService } from '../../services/products.service';
import { ProductsResponse } from '../../types/products-response.type';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [CardsComponent, HeaderComponent],
  providers: [ProductsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products: ProductsResponse[] = [];
  productsFiltered: ProductsResponse[] = [];
  messageError: boolean = false;

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.productsFiltered = response;
        this.messageError = false;
      },
      error: () => {
        this.messageError = true;
      },
    });
  }

  searchProducts(event: KeyboardEvent) {
    const valueInput = (<HTMLInputElement>event.target).value;
    if (valueInput === '') {
      return (this.productsFiltered = this.products);
    }
    const resultFilterTitle = this.products.filter((value: ProductsResponse) =>
      value.title.toLowerCase().includes(valueInput.toLowerCase())
    );
    const resultFilterDescription = this.products.filter(
      (value: ProductsResponse) =>
        value.description.toLowerCase().includes(valueInput.toLowerCase())
    );
    const resultFilter =
      resultFilterTitle.length > 0
        ? resultFilterTitle
        : resultFilterDescription;
    return (this.productsFiltered = resultFilter);
  }

  removeProduct(id: string) {
    this.productsFiltered.splice(Number(id), 1);
  }
}
