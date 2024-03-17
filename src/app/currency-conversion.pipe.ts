import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
  standalone: true,
  pure: false,
})
export class CurrencyConversionPipe implements PipeTransform {
  transform(priceInUSD: number, exchangeRate: number): number {
    return priceInUSD * exchangeRate;
  }
}
