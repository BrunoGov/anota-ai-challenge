import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResponse } from '../types/products-response.type';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  readonly url =
    'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  getProducts(): Observable<ProductsResponse[]> {
    return this.httpClient.get<ProductsResponse[]>(this.url);
  }
}
