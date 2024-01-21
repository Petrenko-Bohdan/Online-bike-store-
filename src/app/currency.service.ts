import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl =
    'https://openexchangerates.org/api/latest.json?app_id=902527e0242c499498142a680e98613f';
  constructor(private http: HttpClient) {}

  getExchangeRate(): Observable<number> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response.rates.EUR));
  }
}
