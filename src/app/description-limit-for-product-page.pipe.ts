import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionLimitForProductPage',
  standalone: true, 
	pure: false,
})
export class DescriptionLimitForProductPagePipe implements PipeTransform {

  transform(value: string, length: number=100): string {
		if (!value) {
			return ''
		}

		if (value.length<=length) {
			return value
		}
    return value.substring(0, length);
  }

}
