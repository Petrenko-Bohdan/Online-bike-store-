export interface HousingLocation {
  id: number;
	imgUrl: string;
	price: number;
	discount: number;
	main: boolean;
	shop: string;
	name: string;
	description: string;
	shipping: string|null ;
	discountUntil: string;
	isNew: boolean;
	color: string[];
	size: string[];
	review: { author: string; text: string; rating: number }[];
}