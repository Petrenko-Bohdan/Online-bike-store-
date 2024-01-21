import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../assets/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Observable<any[]> {
    return of(data);
  }

	getProductById(productId: number): Observable<any>{
		const product = data.find(item => item.id === productId);
		return of(product)
	}
}
