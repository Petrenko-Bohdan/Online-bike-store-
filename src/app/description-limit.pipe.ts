import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionLimit',
  standalone: true,
	pure: true,
})
export class DescriptionLimitPipe implements PipeTransform {

  transform(description:string): string {
		const maxCharacters = 35;
		if (description.length > maxCharacters){
			return description.substr(0, maxCharacters)+ '...';
		}
    return description;
  }

}
